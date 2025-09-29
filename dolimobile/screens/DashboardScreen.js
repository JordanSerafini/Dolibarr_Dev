/**
 * 📱 DASHBOARD BTP AVEC GAMIFICATION 2025
 * Tendances: AI personnalisation, 3D, micro-interactions, mobile-first
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import * as Haptics from 'expo-haptics';
import ConfettiCannon from 'react-native-confetti-cannon';
import LottieView from 'lottie-react-native';

import GamificationSystem from '../gamification/GamificationSystem';

const { width, height } = Dimensions.get('window');

export default function DashboardScreen({ navigation }) {
  const [userStats, setUserStats] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [recentAchievements, setRecentAchievements] = useState([]);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const confettiRef = useRef();

  const gamification = GamificationSystem.getInstance();

  useEffect(() => {
    loadDashboardData();
    animateEntrance();
  }, []);

  const animateEntrance = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();

    // Animation pulsante pour les éléments importants
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.05, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  };

  const loadDashboardData = async () => {
    try {
      setRefreshing(true);

      // Chargement stats utilisateur
      const stats = gamification.getStats();
      setUserStats(stats);

      // Simulation de chargement des tickets depuis l'API
      const mockTickets = await loadTicketsFromAPI();
      setTickets(mockTickets);

      // Check achievements récents
      checkRecentAchievements(stats);

    } catch (error) {
      console.error('Erreur chargement dashboard:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const loadTicketsFromAPI = async () => {
    // Simulation API - utilise les données créées précédemment
    return [
      {
        id: 1,
        ref: 'BTP-2024-001',
        title: 'Dépannage éclairage Bureau 15e étage',
        priority: 4,
        status: 'en_cours',
        location: 'Tour Défense',
        estimatedDuration: 180,
        urgencyColor: '#FF9500'
      },
      {
        id: 8,
        ref: 'BTP-2024-008',
        title: 'Contrôle data center',
        priority: 4,
        status: 'assigne',
        location: 'Tour Défense -3',
        estimatedDuration: 120,
        urgencyColor: '#FF9500'
      }
    ];
  };

  const checkRecentAchievements = (stats) => {
    const achievements = [];

    // Check si proche du level up
    if (stats.progressToNext.xpNeeded <= 100) {
      achievements.push({
        type: 'level_up_soon',
        title: 'Bientôt un niveau!',
        description: `Plus que ${stats.progressToNext.xpNeeded} XP`,
        icon: '🚀'
      });
    }

    // Check objectifs quotidiens
    const dailyProgress = stats.daily_goals.tickets_completed / stats.daily_goals.tickets_target;
    if (dailyProgress >= 0.8) {
      achievements.push({
        type: 'daily_almost',
        title: 'Objectif quotidien proche!',
        description: `${stats.daily_goals.tickets_completed}/${stats.daily_goals.tickets_target} tickets`,
        icon: '🎯'
      });
    }

    setRecentAchievements(achievements);
  };

  const handleTicketPress = async (ticket) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('TicketDetails', { ticketId: ticket.id });
  };

  const triggerLevelUpCelebration = () => {
    setShowLevelUp(true);
    confettiRef.current?.start();
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    setTimeout(() => setShowLevelUp(false), 3000);
  };

  if (!userStats) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={{ uri: 'https://assets2.lottiefiles.com/packages/lf20_loading.json' }}
          autoPlay
          loop
          style={styles.loadingAnimation}
        />
        <Text style={styles.loadingText}>Chargement de votre progression...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      {/* Confetti pour celebrations */}
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{x: width/2, y: 0}}
        fadeOut
        autoStart={false}
      />

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadDashboardData} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Header avec stats utilisateur */}
        <Animated.View
          style={[
            styles.headerContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.headerGradient}
          >
            <View style={styles.userStatsContainer}>
              <View style={styles.levelInfo}>
                <Text style={styles.levelTitle}>
                  {userStats.currentLevel.icon} {userStats.currentLevel.title}
                </Text>
                <Text style={styles.levelNumber}>Niveau {userStats.currentLevel.level}</Text>
              </View>

              <Animated.View style={[styles.xpContainer, { transform: [{ scale: pulseAnim }] }]}>
                <Text style={styles.xpText}>{userStats.xp.toLocaleString()} XP</Text>
                <Progress.Bar
                  progress={userStats.progressToNext.progress}
                  width={200}
                  height={8}
                  color="#FFD700"
                  unfilledColor="rgba(255,255,255,0.3)"
                  borderWidth={0}
                  style={styles.progressBar}
                />
                <Text style={styles.xpNextText}>
                  {userStats.progressToNext.xpNeeded} XP jusqu'au niveau suivant
                </Text>
              </Animated.View>
            </View>

            {/* Streak counter */}
            <View style={styles.streakContainer}>
              <FontAwesome5 name="fire" size={20} color="#FF4500" />
              <Text style={styles.streakText}>{userStats.streaks.current} jours</Text>
            </View>
          </LinearGradient>
        </Animated.View>

        {/* Objectifs quotidiens */}
        <Animated.View style={[styles.dailyGoalsContainer, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>🎯 Objectifs du jour</Text>
          <View style={styles.goalsGrid}>
            <View style={styles.goalCard}>
              <MaterialIcons name="assignment" size={30} color="#007AFF" />
              <Text style={styles.goalTitle}>Tickets</Text>
              <Progress.Circle
                size={60}
                progress={userStats.daily_goals.tickets_completed / userStats.daily_goals.tickets_target}
                thickness={6}
                color="#007AFF"
                unfilledColor="#E5E5EA"
                borderWidth={0}
                showsText
                formatText={() => `${userStats.daily_goals.tickets_completed}/${userStats.daily_goals.tickets_target}`}
                textStyle={styles.progressText}
              />
            </View>

            <View style={styles.goalCard}>
              <MaterialIcons name="photo-camera" size={30} color="#34C759" />
              <Text style={styles.goalTitle}>Photos</Text>
              <Progress.Circle
                size={60}
                progress={userStats.daily_goals.photos_taken / userStats.daily_goals.photos_target}
                thickness={6}
                color="#34C759"
                unfilledColor="#E5E5EA"
                borderWidth={0}
                showsText
                formatText={() => `${userStats.daily_goals.photos_taken}/${userStats.daily_goals.photos_target}`}
                textStyle={styles.progressText}
              />
            </View>
          </View>
        </Animated.View>

        {/* Achievements récents */}
        {recentAchievements.length > 0 && (
          <Animated.View style={[styles.achievementsContainer, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>🏆 Notifications</Text>
            {recentAchievements.map((achievement, index) => (
              <TouchableOpacity
                key={index}
                style={styles.achievementCard}
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
              >
                <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementTitle}>{achievement.title}</Text>
                  <Text style={styles.achievementDescription}>{achievement.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </Animated.View>
        )}

        {/* Mes tickets en cours */}
        <Animated.View style={[styles.ticketsContainer, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>⚡ Mes interventions</Text>
          {tickets.map((ticket, index) => (
            <TouchableOpacity
              key={ticket.id}
              style={[styles.ticketCard, { borderLeftColor: ticket.urgencyColor }]}
              onPress={() => handleTicketPress(ticket)}
              activeOpacity={0.8}
            >
              <View style={styles.ticketHeader}>
                <Text style={styles.ticketRef}>{ticket.ref}</Text>
                <View style={[styles.statusBadge, { backgroundColor: ticket.urgencyColor }]}>
                  <Text style={styles.statusText}>{ticket.status.toUpperCase()}</Text>
                </View>
              </View>

              <Text style={styles.ticketTitle}>{ticket.title}</Text>

              <View style={styles.ticketFooter}>
                <View style={styles.locationContainer}>
                  <Ionicons name="location" size={16} color="#8E8E93" />
                  <Text style={styles.locationText}>{ticket.location}</Text>
                </View>
                <View style={styles.durationContainer}>
                  <MaterialIcons name="access-time" size={16} color="#8E8E93" />
                  <Text style={styles.durationText}>{ticket.estimatedDuration}min</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* Actions rapides */}
        <Animated.View style={[styles.quickActionsContainer, { opacity: fadeAnim }]}>
          <Text style={styles.sectionTitle}>🚀 Actions rapides</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                navigation.navigate('NewTicket');
              }}
            >
              <MaterialIcons name="add" size={30} color="white" />
              <Text style={styles.actionText}>Nouveau ticket</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                navigation.navigate('Camera');
              }}
            >
              <MaterialIcons name="camera" size={30} color="white" />
              <Text style={styles.actionText}>Prendre photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                navigation.navigate('Profile');
              }}
            >
              <FontAwesome5 name="trophy" size={26} color="white" />
              <Text style={styles.actionText}>Mes badges</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Modal Level Up */}
      {showLevelUp && (
        <Animated.View style={styles.levelUpModal}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.levelUpContent}
          >
            <Text style={styles.levelUpTitle}>🎉 LEVEL UP!</Text>
            <Text style={styles.levelUpText}>
              Vous êtes maintenant {userStats.currentLevel.title}!
            </Text>
            <TouchableOpacity
              style={styles.levelUpButton}
              onPress={() => setShowLevelUp(false)}
            >
              <Text style={styles.levelUpButtonText}>Continuer</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  loadingAnimation: {
    width: 100,
    height: 100,
  },
  loadingText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerGradient: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  userStatsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  levelInfo: {
    alignItems: 'center',
    marginBottom: 15,
  },
  levelTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  levelNumber: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginTop: 5,
  },
  xpContainer: {
    alignItems: 'center',
  },
  xpText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 10,
  },
  progressBar: {
    marginVertical: 10,
  },
  xpNextText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'center',
  },
  streakText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  dailyGoalsContainer: {
    margin: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  goalsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  goalCard: {
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    padding: 15,
    borderRadius: 12,
    minWidth: 100,
  },
  goalTitle: {
    color: 'white',
    fontSize: 14,
    marginVertical: 8,
    fontWeight: '600',
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  achievementsContainer: {
    margin: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  achievementIcon: {
    fontSize: 30,
    marginRight: 15,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementDescription: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 2,
  },
  ticketsContainer: {
    margin: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
  },
  ticketCard: {
    backgroundColor: '#3a3a3a',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ticketRef: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ticketTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 4,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 4,
  },
  quickActionsContainer: {
    margin: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  levelUpModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelUpContent: {
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    maxWidth: '80%',
  },
  levelUpTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  levelUpText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  levelUpButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  levelUpButtonText: {
    color: '#FFA500',
    fontSize: 16,
    fontWeight: 'bold',
  },
});