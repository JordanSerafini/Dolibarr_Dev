/**
 * 🔧 ÉCRAN D'INTERVENTION AVEC GAMIFICATION
 * Tendances 2025: Validation étapes ludique, progress tracking, micro-rewards
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import * as Haptics from 'expo-haptics';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import LottieView from 'lottie-react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

import GamificationSystem from '../gamification/GamificationSystem';

const { width, height } = Dimensions.get('window');

export default function InterventionScreen({ route, navigation }) {
  const { ticketId } = route.params;
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [interventionData, setInterventionData] = useState({
    diagnostic: '',
    photosAvant: [],
    photosApres: [],
    materielUtilise: [],
    tempsDebut: null,
    tempsFin: null,
    signatureClient: null,
    observations: ''
  });

  // États UI
  const [showCelebration, setShowCelebration] = useState(false);
  const [stepReward, setStepReward] = useState(null);
  const [location, setLocation] = useState(null);

  // Animations
  const progressAnim = useRef(new Animated.Value(0)).current;
  const stepAnim = useRef(new Animated.Value(0)).current;
  const confettiRef = useRef();

  const gamification = GamificationSystem.getInstance();

  // Étapes de l'intervention avec gamification
  const INTERVENTION_STEPS = [
    {
      id: 'arrival',
      title: 'Arrivée sur site',
      description: 'Confirmer votre présence',
      icon: '📍',
      xpReward: 25,
      action: 'checkIn',
      validationColor: '#34C759'
    },
    {
      id: 'diagnostic',
      title: 'Diagnostic',
      description: 'Analyser le problème',
      icon: '🔍',
      xpReward: 50,
      action: 'fillDiagnostic',
      validationColor: '#007AFF'
    },
    {
      id: 'photos_avant',
      title: 'Photos avant',
      description: 'Documenter l\'état initial',
      icon: '📸',
      xpReward: 30,
      action: 'takePhotoBefore',
      validationColor: '#FF9500'
    },
    {
      id: 'intervention',
      title: 'Intervention',
      description: 'Effectuer les travaux',
      icon: '🔧',
      xpReward: 100,
      action: 'performWork',
      validationColor: '#AF52DE'
    },
    {
      id: 'photos_apres',
      title: 'Photos après',
      description: 'Documenter le résultat',
      icon: '📷',
      xpReward: 30,
      action: 'takePhotoAfter',
      validationColor: '#FF9500'
    },
    {
      id: 'validation',
      title: 'Validation client',
      description: 'Faire signer le client',
      icon: '✍️',
      xpReward: 75,
      action: 'getSignature',
      validationColor: '#FF2D92'
    },
    {
      id: 'cloture',
      title: 'Clôture',
      description: 'Finaliser l\'intervention',
      icon: '🎯',
      xpReward: 50,
      action: 'completeIntervention',
      validationColor: '#34C759'
    }
  ];

  useEffect(() => {
    initializeIntervention();
    animateProgress();
  }, []);

  useEffect(() => {
    const progress = completedSteps.length / INTERVENTION_STEPS.length;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [completedSteps]);

  const initializeIntervention = async () => {
    try {
      // Demander permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      }

      // Initialiser temps de début
      setInterventionData(prev => ({
        ...prev,
        tempsDebut: new Date()
      }));

    } catch (error) {
      console.error('Erreur initialisation:', error);
    }
  };

  const animateProgress = () => {
    Animated.spring(stepAnim, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const completeStep = async (stepId) => {
    if (completedSteps.includes(stepId)) return;

    const step = INTERVENTION_STEPS.find(s => s.id === stepId);
    const stepIndex = INTERVENTION_STEPS.findIndex(s => s.id === stepId);

    // Ajouter à la liste des étapes complétées
    setCompletedSteps(prev => [...prev, stepId]);

    // Récompense XP avec animation
    const reward = await gamification.awardXP(step.xpReward, `Étape: ${step.title}`);
    setStepReward(reward);

    // Haptic feedback
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Animation de célébration
    setShowCelebration(true);
    confettiRef.current?.start();

    // Check badges
    await gamification.checkAndAwardBadges('STEP_COMPLETED', { stepId });

    setTimeout(() => {
      setShowCelebration(false);
      setStepReward(null);
    }, 2000);

    // Passer automatiquement à l'étape suivante
    if (stepIndex < INTERVENTION_STEPS.length - 1) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const handleStepAction = async (action, stepId) => {
    switch (action) {
      case 'checkIn':
        await handleCheckIn(stepId);
        break;
      case 'fillDiagnostic':
        navigation.navigate('DiagnosticForm', {
          onComplete: (data) => {
            setInterventionData(prev => ({ ...prev, diagnostic: data.diagnostic }));
            completeStep(stepId);
          }
        });
        break;
      case 'takePhotoBefore':
        navigation.navigate('CameraScreen', {
          type: 'avant',
          onPhotoTaken: (photo) => {
            setInterventionData(prev => ({
              ...prev,
              photosAvant: [...prev.photosAvant, photo]
            }));
            completeStep(stepId);
            // Bonus gamification pour première photo
            if (prev.photosAvant.length === 0) {
              gamification.checkAndAwardBadges('PHOTO_TAKEN');
            }
          }
        });
        break;
      case 'performWork':
        navigation.navigate('WorkDetails', {
          onComplete: (data) => {
            setInterventionData(prev => ({ ...prev, materielUtilise: data.materiel }));
            completeStep(stepId);
          }
        });
        break;
      case 'takePhotoAfter':
        navigation.navigate('CameraScreen', {
          type: 'apres',
          onPhotoTaken: (photo) => {
            setInterventionData(prev => ({
              ...prev,
              photosApres: [...prev.photosApres, photo]
            }));
            completeStep(stepId);
            gamification.checkAndAwardBadges('PHOTO_TAKEN');
          }
        });
        break;
      case 'getSignature':
        navigation.navigate('SignatureScreen', {
          onSignature: (signature) => {
            setInterventionData(prev => ({ ...prev, signatureClient: signature }));
            completeStep(stepId);
          }
        });
        break;
      case 'completeIntervention':
        await handleCompleteIntervention(stepId);
        break;
    }
  };

  const handleCheckIn = async (stepId) => {
    if (!location) {
      Alert.alert('Erreur', 'Impossible d\'obtenir votre position');
      return;
    }

    // Simulation vérification proximité
    const isOnSite = true; // Dans un vrai cas, on comparerait avec l'adresse du ticket

    if (isOnSite) {
      Alert.alert('✅ Check-in confirmé!', 'Vous êtes arrivé sur le site d\'intervention', [
        { text: 'OK', onPress: () => completeStep(stepId) }
      ]);
    } else {
      Alert.alert('❌ Position incorrecte', 'Vous n\'êtes pas sur le site d\'intervention');
    }
  };

  const handleCompleteIntervention = async (stepId) => {
    const duration = Math.round((new Date() - interventionData.tempsDebut) / (1000 * 60));

    // Finaliser les données
    setInterventionData(prev => ({ ...prev, tempsFin: new Date() }));

    // Bonus pour intervention rapide
    if (duration < 120) {
      await gamification.checkAndAwardBadges('TICKET_COMPLETED', { duration });
    } else {
      await gamification.checkAndAwardBadges('TICKET_COMPLETED');
    }

    // Compléter l'étape finale
    await completeStep(stepId);

    // Retourner au dashboard avec célébration
    setTimeout(() => {
      navigation.navigate('Dashboard', { interventionCompleted: true });
    }, 2000);
  };

  const renderStepCard = (step, index) => {
    const isCompleted = completedSteps.includes(step.id);
    const isCurrent = index === currentStep;
    const isAccessible = index <= currentStep || isCompleted;

    return (
      <Animated.View
        key={step.id}
        style={[
          styles.stepCard,
          {
            opacity: isAccessible ? 1 : 0.5,
            transform: [{ scale: stepAnim }],
            borderColor: isCompleted ? step.validationColor : isCurrent ? '#007AFF' : '#3a3a3a'
          }
        ]}
      >
        <TouchableOpacity
          style={styles.stepContent}
          onPress={() => isAccessible && handleStepAction(step.action, step.id)}
          disabled={!isAccessible || isCompleted}
          activeOpacity={0.8}
        >
          {/* Indicator circle */}
          <View style={[styles.stepIndicator, {
            backgroundColor: isCompleted ? step.validationColor : isCurrent ? '#007AFF' : '#3a3a3a'
          }]}>
            {isCompleted ? (
              <MaterialIcons name="check" size={24} color="white" />
            ) : (
              <Text style={styles.stepIcon}>{step.icon}</Text>
            )}
          </View>

          <View style={styles.stepInfo}>
            <View style={styles.stepHeader}>
              <Text style={[styles.stepTitle, { color: isCompleted ? step.validationColor : 'white' }]}>
                {step.title}
              </Text>
              {isCompleted && (
                <View style={styles.xpBadge}>
                  <Text style={styles.xpBadgeText}>+{step.xpReward} XP</Text>
                </View>
              )}
            </View>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>

          {isCurrent && !isCompleted && (
            <View style={styles.currentIndicator}>
              <MaterialIcons name="arrow-forward" size={24} color="#007AFF" />
            </View>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Confetti pour célébrations */}
      <ConfettiCannon
        ref={confettiRef}
        count={100}
        origin={{ x: width / 2, y: height / 3 }}
        fadeOut
        autoStart={false}
      />

      {/* Header avec progress */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>Intervention en cours</Text>
            <Text style={styles.headerSubtitle}>BTP-2024-001</Text>
          </View>
        </View>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Progression: {completedSteps.length}/{INTERVENTION_STEPS.length}
          </Text>
          <Animated.View style={styles.progressBarContainer}>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </Animated.View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {INTERVENTION_STEPS.map((step, index) => renderStepCard(step, index))}

        {/* Informations intervention */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>📋 Informations</Text>
          {interventionData.tempsDebut && (
            <Text style={styles.infoText}>
              🕐 Début: {interventionData.tempsDebut.toLocaleTimeString()}
            </Text>
          )}
          {location && (
            <Text style={styles.infoText}>
              📍 Position: {location.coords.latitude.toFixed(4)}, {location.coords.longitude.toFixed(4)}
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Célébration étape */}
      {showCelebration && stepReward && (
        <Animated.View style={styles.celebrationModal}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.celebrationContent}
          >
            <LottieView
              source={{ uri: 'https://assets2.lottiefiles.com/packages/lf20_success.json' }}
              autoPlay
              loop={false}
              style={styles.celebrationAnimation}
            />
            <Text style={styles.celebrationTitle}>🎉 Étape validée!</Text>
            <Text style={styles.celebrationXP}>+{stepReward.xpGained} XP</Text>
            {stepReward.leveledUp && (
              <Text style={styles.celebrationLevel}>🚀 LEVEL UP!</Text>
            )}
          </LinearGradient>
        </Animated.View>
      )}

      {/* Floating action button */}
      {completedSteps.length === INTERVENTION_STEPS.length && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <LinearGradient
            colors={['#34C759', '#30D158']}
            style={styles.floatingButtonGradient}
          >
            <MaterialIcons name="home" size={28} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 15,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginTop: 2,
  },
  progressContainer: {
    marginTop: 10,
  },
  progressText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  stepCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#3a3a3a',
  },
  stepContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  stepIndicator: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepIcon: {
    fontSize: 24,
  },
  stepInfo: {
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepDescription: {
    color: '#8E8E93',
    fontSize: 14,
  },
  xpBadge: {
    backgroundColor: '#34C759',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  xpBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  currentIndicator: {
    marginLeft: 10,
  },
  infoContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  infoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoText: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 8,
  },
  celebrationModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  celebrationContent: {
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    maxWidth: '80%',
  },
  celebrationAnimation: {
    width: 100,
    height: 100,
  },
  celebrationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  celebrationXP: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },
  celebrationLevel: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  floatingButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});