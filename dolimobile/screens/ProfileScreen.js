/**
 * 👤 PROFIL TECHNICIEN AVEC GAMIFICATION
 * Tendances 2025: Badges collection, progress tracking, social features
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
  Share,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import * as Haptics from 'expo-haptics';
import LottieView from 'lottie-react-native';

import GamificationSystem from '../gamification/GamificationSystem';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  const [userStats, setUserStats] = useState(null);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [animationState, setAnimationState] = useState('idle');

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const badgeAnimations = useRef([]).current;

  const gamification = GamificationSystem.getInstance();

  useEffect(() => {
    loadProfile();
    animateEntrance();
  }, []);

  const loadProfile = async () => {
    const stats = gamification.getStats();
    setUserStats(stats);

    // Initialize badge animations
    stats.badges.forEach((_, index) => {
      badgeAnimations[index] = new Animated.Value(0);
    });

    // Stagger badge animations
    stats.badges.forEach((_, index) => {
      Animated.timing(badgeAnimations[index], {
        toValue: 1,
        duration: 800,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateEntrance = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const shareAchievements = async () => {
    if (!userStats) return;

    const message = `🎮 Mon profil Dolibarr BTP:\n🏆 Niveau ${userStats.currentLevel.level} - ${userStats.currentLevel.title}\n⚡ ${userStats.xp.toLocaleString()} XP\n🎯 ${userStats.badges.length} badges débloqués\n🔥 ${userStats.streaks.best} jours de streak record!`;

    await Share.share({
      message,
      title: 'Mes achievements BTP'
    });
  };

  const renderBadge = (badge, index) => {
    if (!badge) return null;

    const animValue = badgeAnimations[index] || new Animated.Value(1);

    return (
      <Animated.View
        key={badge.id}
        style={[
          styles.badgeContainer,
          {
            opacity: animValue,
            transform: [{
              scale: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
              })
            }]
          }
        ]}
      >
        <TouchableOpacity
          style={[
            styles.badgeCard,
            { borderColor: GamificationSystem.getBadgeRarityColor(badge.rarity) }
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            showBadgeDetails(badge);
          }}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[
              GamificationSystem.getBadgeRarityColor(badge.rarity),
              GamificationSystem.getBadgeRarityColor(badge.rarity) + '80'
            ]}
            style={styles.badgeIconContainer}
          >
            <Text style={styles.badgeIcon}>{badge.icon}</Text>
          </LinearGradient>

          <View style={styles.badgeInfo}>
            <Text style={styles.badgeName}>{badge.name}</Text>
            <Text style={styles.badgeDescription}>{badge.description}</Text>
            <View style={styles.badgeFooter}>
              <Text style={[styles.badgeRarity, {
                color: GamificationSystem.getBadgeRarityColor(badge.rarity)
              }]}>
                {badge.rarity.toUpperCase()}
              </Text>
              <Text style={styles.badgeXP}>+{badge.xp} XP</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const showBadgeDetails = (badge) => {
    // Animation de pulse sur le badge sélectionné
    setAnimationState('badge_selected');

    Alert.alert(
      `${badge.icon} ${badge.name}`,
      `${badge.description}\n\nRareté: ${badge.rarity}\nXP gagné: ${badge.xp}`,
      [{ text: 'OK', onPress: () => setAnimationState('idle') }]
    );
  };

  const renderStatsCard = (title, value, subtitle, icon, color) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <View style={styles.statIcon}>
        <MaterialIcons name={icon} size={24} color={color} />
      </View>
      <View style={styles.statContent}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statTitle}>{title}</Text>
        {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
      </View>
    </View>
  );

  const renderTabContent = () => {
    if (!userStats) return null;

    switch (selectedTab) {
      case 'overview':
        return renderOverviewTab();
      case 'badges':
        return renderBadgesTab();
      case 'stats':
        return renderStatsTab();
      default:
        return renderOverviewTab();
    }
  };

  const renderOverviewTab = () => (
    <View style={styles.tabContent}>
      {/* Progression actuelle */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>🚀 Progression actuelle</Text>

        <View style={styles.levelProgressCard}>
          <LinearGradient
            colors={[userStats.currentLevel.color, userStats.currentLevel.color + '80']}
            style={styles.levelProgressGradient}
          >
            <View style={styles.levelProgressHeader}>
              <Text style={styles.currentLevelTitle}>
                {userStats.currentLevel.icon} {userStats.currentLevel.title}
              </Text>
              <Text style={styles.currentLevelNumber}>
                Niveau {userStats.currentLevel.level}
              </Text>
            </View>

            <View style={styles.xpProgressContainer}>
              <Text style={styles.xpText}>
                {userStats.xp.toLocaleString()} XP
              </Text>

              <Progress.Bar
                progress={userStats.progressToNext.progress}
                width={width - 80}
                height={12}
                color="#FFD700"
                unfilledColor="rgba(255,255,255,0.3)"
                borderWidth={0}
                borderRadius={6}
                style={styles.xpProgressBar}
              />

              <Text style={styles.nextLevelText}>
                {userStats.progressToNext.nextLevel
                  ? `${userStats.progressToNext.xpNeeded} XP jusqu'à ${userStats.progressToNext.nextLevel.title}`
                  : 'Niveau maximum atteint!'
                }
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* Objectifs quotidiens */}
      <View style={styles.dailyGoalsSection}>
        <Text style={styles.sectionTitle}>🎯 Objectifs du jour</Text>
        <View style={styles.goalsContainer}>
          <View style={styles.goalProgressCard}>
            <MaterialIcons name="assignment" size={30} color="#007AFF" />
            <Text style={styles.goalTitle}>Tickets</Text>
            <Progress.Circle
              size={80}
              progress={userStats.daily_goals.tickets_completed / userStats.daily_goals.tickets_target}
              thickness={8}
              color="#007AFF"
              unfilledColor="#3a3a3a"
              borderWidth={0}
              showsText
              formatText={() => `${userStats.daily_goals.tickets_completed}/${userStats.daily_goals.tickets_target}`}
              textStyle={styles.goalProgressText}
            />
          </View>

          <View style={styles.goalProgressCard}>
            <MaterialIcons name="photo-camera" size={30} color="#34C759" />
            <Text style={styles.goalTitle}>Photos</Text>
            <Progress.Circle
              size={80}
              progress={userStats.daily_goals.photos_taken / userStats.daily_goals.photos_target}
              thickness={8}
              color="#34C759"
              unfilledColor="#3a3a3a"
              borderWidth={0}
              showsText
              formatText={() => `${userStats.daily_goals.photos_taken}/${userStats.daily_goals.photos_target}`}
              textStyle={styles.goalProgressText}
            />
          </View>
        </View>
      </View>

      {/* Streak & Stats rapides */}
      <View style={styles.quickStatsSection}>
        <Text style={styles.sectionTitle}>📊 Statistiques rapides</Text>
        <View style={styles.quickStatsGrid}>
          {renderStatsCard(
            'Streak actuel',
            `${userStats.streaks.current} jours`,
            `Record: ${userStats.streaks.best}`,
            'whatshot',
            '#FF4500'
          )}
          {renderStatsCard(
            'Badges',
            userStats.badges.length,
            `sur ${Object.keys(GamificationSystem.BADGES).length}`,
            'stars',
            '#FFD700'
          )}
        </View>
      </View>
    </View>
  );

  const renderBadgesTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.badgesHeader}>
        <Text style={styles.sectionTitle}>🏆 Ma collection</Text>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={shareAchievements}
        >
          <MaterialIcons name="share" size={20} color="#007AFF" />
          <Text style={styles.shareButtonText}>Partager</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.badgeProgress}>
        <Progress.Bar
          progress={userStats.badges.length / Object.keys(GamificationSystem.BADGES).length}
          width={width - 40}
          height={8}
          color="#FFD700"
          unfilledColor="#3a3a3a"
          borderWidth={0}
          borderRadius={4}
        />
        <Text style={styles.badgeProgressText}>
          {userStats.badges.length}/{Object.keys(GamificationSystem.BADGES).length} badges débloqués
        </Text>
      </View>

      <ScrollView style={styles.badgesGrid}>
        {userStats.badges.map((badgeId, index) => {
          const badge = GamificationSystem.BADGES[badgeId];
          return renderBadge(badge, index);
        })}

        {/* Badges à débloquer */}
        <Text style={[styles.sectionTitle, styles.lockedBadgesTitle]}>🔒 À débloquer</Text>
        {Object.values(GamificationSystem.BADGES)
          .filter(badge => !userStats.badges.includes(badge.id))
          .slice(0, 3)
          .map((badge, index) => (
            <View key={badge.id} style={styles.lockedBadgeCard}>
              <View style={styles.lockedBadgeIcon}>
                <Text style={styles.lockedBadgeIconText}>?</Text>
              </View>
              <View style={styles.lockedBadgeInfo}>
                <Text style={styles.lockedBadgeName}>Badge mystère</Text>
                <Text style={styles.lockedBadgeHint}>
                  {badge.description.substring(0, 20)}...
                </Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );

  const renderStatsTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>📈 Statistiques détaillées</Text>

      {/* Graphique de progression (simulation) */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>XP des 7 derniers jours</Text>
        <View style={styles.chartBars}>
          {[120, 180, 95, 200, 150, 90, 160].map((xp, index) => (
            <View key={index} style={styles.chartBar}>
              <View
                style={[
                  styles.chartBarFill,
                  { height: `${(xp / 200) * 100}%`, backgroundColor: '#007AFF' }
                ]}
              />
              <Text style={styles.chartBarLabel}>{xp}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Achievements détaillés */}
      <View style={styles.achievementsDetailSection}>
        <Text style={styles.achievementsTitle}>🎯 Accomplissements</Text>

        {renderStatsCard(
          'Tickets complétés',
          userStats.achievements.tickets_completed,
          'Total depuis le début',
          'assignment-turned-in',
          '#34C759'
        )}

        {renderStatsCard(
          'Photos prises',
          userStats.achievements.photos_taken,
          'Documentation terrain',
          'photo-camera',
          '#FF9500'
        )}

        {renderStatsCard(
          'Notes parfaites',
          userStats.achievements.perfect_ratings,
          'Satisfaction client 5/5',
          'star',
          '#FFD700'
        )}

        {renderStatsCard(
          'Interventions urgentes',
          userStats.achievements.urgent_solved,
          'Tickets priorité 5',
          'emergency',
          '#FF2D92'
        )}
      </View>
    </View>
  );

  if (!userStats) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <LottieView
          source={{ uri: 'https://assets2.lottiefiles.com/packages/lf20_loading.json' }}
          autoPlay
          loop
          style={styles.loadingAnimation}
        />
        <Text style={styles.loadingText}>Chargement de votre profil...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
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

          <Text style={styles.headerTitle}>Mon Profil</Text>

          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => {/* Settings */}}
          >
            <MaterialIcons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profil principal */}
        <Animated.View style={[styles.profileMain, { opacity: fadeAnim }]}>
          <View style={styles.avatarContainer}>
            <LinearGradient
              colors={[userStats.currentLevel.color, userStats.currentLevel.color + '80']}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>
                {userStats.currentLevel.icon}
              </Text>
            </LinearGradient>
          </View>

          <Text style={styles.profileName}>Antoine Moreau</Text>
          <Text style={styles.profileTitle}>
            {userStats.currentLevel.title} - Niveau {userStats.currentLevel.level}
          </Text>
          <Text style={styles.profileXP}>
            {userStats.xp.toLocaleString()} XP
          </Text>
        </Animated.View>
      </LinearGradient>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {[
          { id: 'overview', label: 'Vue d\'ensemble', icon: 'dashboard' },
          { id: 'badges', label: 'Badges', icon: 'stars' },
          { id: 'stats', label: 'Statistiques', icon: 'bar-chart' }
        ].map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              selectedTab === tab.id && styles.activeTab
            ]}
            onPress={() => {
              setSelectedTab(tab.id);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <MaterialIcons
              name={tab.icon}
              size={20}
              color={selectedTab === tab.id ? '#007AFF' : '#8E8E93'}
            />
            <Text style={[
              styles.tabLabel,
              selectedTab === tab.id && styles.activeTabLabel
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contenu des tabs */}
      <ScrollView style={styles.scrollView}>
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
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
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 8,
  },
  profileMain: {
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileTitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginBottom: 5,
  },
  profileXP: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabLabel: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  activeTabLabel: {
    color: '#007AFF',
  },
  scrollView: {
    flex: 1,
  },
  tabContent: {
    padding: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  progressSection: {
    marginBottom: 30,
  },
  levelProgressCard: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  levelProgressGradient: {
    padding: 20,
  },
  levelProgressHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  currentLevelTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  currentLevelNumber: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginTop: 5,
  },
  xpProgressContainer: {
    alignItems: 'center',
  },
  xpText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  xpProgressBar: {
    marginBottom: 10,
  },
  nextLevelText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
  dailyGoalsSection: {
    marginBottom: 30,
  },
  goalsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  goalProgressCard: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 15,
    minWidth: 120,
  },
  goalTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  goalProgressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  quickStatsSection: {
    marginBottom: 30,
  },
  quickStatsGrid: {
    gap: 15,
  },
  statCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
  },
  statIcon: {
    marginRight: 15,
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
  statSubtitle: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 2,
  },
  badgesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  shareButtonText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
  },
  badgeProgress: {
    marginBottom: 20,
    alignItems: 'center',
  },
  badgeProgressText: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 10,
  },
  badgesGrid: {
    flex: 1,
  },
  badgeContainer: {
    marginBottom: 15,
  },
  badgeCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
  badgeIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  badgeIcon: {
    fontSize: 30,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  badgeDescription: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 8,
  },
  badgeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeRarity: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  badgeXP: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lockedBadgesTitle: {
    marginTop: 20,
    marginBottom: 15,
  },
  lockedBadgeCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
    marginBottom: 10,
  },
  lockedBadgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3a3a3a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  lockedBadgeIconText: {
    color: '#8E8E93',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lockedBadgeInfo: {
    flex: 1,
  },
  lockedBadgeName: {
    color: '#8E8E93',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  lockedBadgeHint: {
    color: '#5a5a5a',
    fontSize: 14,
  },
  chartContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  chartTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 150,
  },
  chartBar: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 2,
  },
  chartBarFill: {
    backgroundColor: '#007AFF',
    width: '80%',
    borderRadius: 4,
    marginBottom: 5,
  },
  chartBarLabel: {
    color: '#8E8E93',
    fontSize: 12,
    fontWeight: '600',
  },
  achievementsDetailSection: {
    gap: 15,
  },
  achievementsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});