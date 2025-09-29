/**
 * 🎮 SYSTÈME DE GAMIFICATION BTP 2025
 * Tendances: Progress tracking, badges, récompenses, micro-interactions
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as Notifications from 'expo-notifications';

export class GamificationSystem {
  static instance = null;

  // Configuration des badges et achievements
  static BADGES = {
    // 🚀 Badges Productivité
    FIRST_TICKET: {
      id: 'first_ticket',
      name: 'Premier Pas',
      description: 'Première intervention terminée',
      icon: '🎯',
      xp: 50,
      rarity: 'common'
    },
    SPEED_DEMON: {
      id: 'speed_demon',
      name: 'Éclair',
      description: 'Intervention terminée en moins de 2h',
      icon: '⚡',
      xp: 100,
      rarity: 'rare'
    },
    PERFECT_WEEK: {
      id: 'perfect_week',
      name: 'Semaine Parfaite',
      description: '7 jours consécutifs avec au moins 1 ticket résolu',
      icon: '🏆',
      xp: 500,
      rarity: 'epic'
    },

    // 📸 Badges Qualité
    PHOTO_PRO: {
      id: 'photo_pro',
      name: 'Photographe Pro',
      description: '50 photos avant/après prises',
      icon: '📸',
      xp: 200,
      rarity: 'uncommon'
    },
    DETAIL_MASTER: {
      id: 'detail_master',
      name: 'Maître du Détail',
      description: '100 descriptions détaillées rédigées',
      icon: '📝',
      xp: 300,
      rarity: 'rare'
    },

    // 🌟 Badges Satisfaction
    CLIENT_HERO: {
      id: 'client_hero',
      name: 'Héros Client',
      description: '10 notes 5/5 de satisfaction client',
      icon: '🌟',
      xp: 400,
      rarity: 'epic'
    },
    PROBLEM_SOLVER: {
      id: 'problem_solver',
      name: 'Résolveur de Problèmes',
      description: '25 tickets urgents résolus',
      icon: '🔧',
      xp: 350,
      rarity: 'rare'
    },

    // 🎊 Badges Spéciaux
    NIGHT_OWL: {
      id: 'night_owl',
      name: 'Gardien de Nuit',
      description: 'Intervention réussie après 22h',
      icon: '🦉',
      xp: 150,
      rarity: 'uncommon'
    },
    WEEKEND_WARRIOR: {
      id: 'weekend_warrior',
      name: 'Guerrier du Week-end',
      description: '5 interventions le week-end',
      icon: '⚔️',
      xp: 250,
      rarity: 'rare'
    }
  };

  // Système de niveaux et progression
  static LEVELS = [
    { level: 1, title: 'Apprenti', minXP: 0, color: '#8E8E93', icon: '🔰' },
    { level: 2, title: 'Électricien', minXP: 500, color: '#007AFF', icon: '⚡' },
    { level: 3, title: 'Expert', minXP: 1500, color: '#34C759', icon: '🔧' },
    { level: 4, title: 'Spécialiste', minXP: 3500, color: '#FF9500', icon: '🏅' },
    { level: 5, title: 'Maître', minXP: 7000, color: '#AF52DE', icon: '🎖️' },
    { level: 6, title: 'Légende', minXP: 15000, color: '#FF2D92', icon: '👑' }
  ];

  static getInstance() {
    if (!this.instance) {
      this.instance = new GamificationSystem();
    }
    return this.instance;
  }

  constructor() {
    this.userStats = {
      xp: 0,
      level: 1,
      badges: [],
      streaks: {
        current: 0,
        best: 0,
        lastActiveDate: null
      },
      achievements: {
        tickets_completed: 0,
        photos_taken: 0,
        perfect_ratings: 0,
        speed_completions: 0,
        urgent_solved: 0,
        night_interventions: 0,
        weekend_interventions: 0
      },
      daily_goals: {
        tickets_target: 3,
        tickets_completed: 0,
        photos_target: 5,
        photos_taken: 0,
        last_reset: new Date().toDateString()
      }
    };
    this.loadUserStats();
  }

  // 💾 Persistance des données
  async loadUserStats() {
    try {
      const saved = await AsyncStorage.getItem('btp_gamification_stats');
      if (saved) {
        this.userStats = { ...this.userStats, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.error('Erreur chargement stats:', error);
    }
  }

  async saveUserStats() {
    try {
      await AsyncStorage.setItem('btp_gamification_stats', JSON.stringify(this.userStats));
    } catch (error) {
      console.error('Erreur sauvegarde stats:', error);
    }
  }

  // 🏆 Système de récompenses
  async awardXP(amount, reason = 'Action complétée') {
    const oldLevel = this.getCurrentLevel();
    this.userStats.xp += amount;
    const newLevel = this.getCurrentLevel();

    await this.saveUserStats();

    // Haptic feedback pour les gains d'XP
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Level up celebration!
    if (newLevel.level > oldLevel.level) {
      await this.celebrateLevelUp(newLevel);
    }

    return {
      xpGained: amount,
      totalXP: this.userStats.xp,
      oldLevel,
      newLevel,
      leveledUp: newLevel.level > oldLevel.level
    };
  }

  async celebrateLevelUp(newLevel) {
    // Haptic feedback intense pour level up
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Notification push
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `🎉 Level Up! ${newLevel.icon}`,
        body: `Félicitations ! Vous êtes maintenant ${newLevel.title} niveau ${newLevel.level}`,
        sound: true,
      },
      trigger: null, // Immédiat
    });

    return true;
  }

  // 🎯 Système de badges
  async checkAndAwardBadges(action, data = {}) {
    const newBadges = [];

    switch (action) {
      case 'TICKET_COMPLETED':
        this.userStats.achievements.tickets_completed++;

        // Premier ticket
        if (this.userStats.achievements.tickets_completed === 1) {
          newBadges.push(await this.awardBadge('FIRST_TICKET'));
        }

        // Intervention rapide (< 2h)
        if (data.duration && data.duration < 120) {
          this.userStats.achievements.speed_completions++;
          newBadges.push(await this.awardBadge('SPEED_DEMON'));
        }

        // Intervention nocturne
        const hour = new Date().getHours();
        if (hour >= 22 || hour <= 6) {
          this.userStats.achievements.night_interventions++;
          newBadges.push(await this.awardBadge('NIGHT_OWL'));
        }

        // Intervention week-end
        const dayOfWeek = new Date().getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          this.userStats.achievements.weekend_interventions++;
          if (this.userStats.achievements.weekend_interventions >= 5) {
            newBadges.push(await this.awardBadge('WEEKEND_WARRIOR'));
          }
        }

        // Update streak
        await this.updateStreak();
        break;

      case 'PHOTO_TAKEN':
        this.userStats.achievements.photos_taken++;
        if (this.userStats.achievements.photos_taken >= 50) {
          newBadges.push(await this.awardBadge('PHOTO_PRO'));
        }
        break;

      case 'PERFECT_RATING':
        this.userStats.achievements.perfect_ratings++;
        if (this.userStats.achievements.perfect_ratings >= 10) {
          newBadges.push(await this.awardBadge('CLIENT_HERO'));
        }
        break;

      case 'URGENT_SOLVED':
        this.userStats.achievements.urgent_solved++;
        if (this.userStats.achievements.urgent_solved >= 25) {
          newBadges.push(await this.awardBadge('PROBLEM_SOLVER'));
        }
        break;
    }

    await this.saveUserStats();
    return newBadges.filter(Boolean);
  }

  async awardBadge(badgeId) {
    const badge = GamificationSystem.BADGES[badgeId];
    if (!badge || this.userStats.badges.includes(badgeId)) {
      return null;
    }

    this.userStats.badges.push(badgeId);
    await this.awardXP(badge.xp, `Badge: ${badge.name}`);

    // Haptic feedback pour nouveau badge
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    return badge;
  }

  // 🔥 Système de streaks
  async updateStreak() {
    const today = new Date().toDateString();
    const lastActive = this.userStats.streaks.lastActiveDate;

    if (lastActive === today) {
      return; // Déjà compté aujourd'hui
    }

    if (lastActive) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastActive === yesterday.toDateString()) {
        // Continuité du streak
        this.userStats.streaks.current++;
      } else {
        // Streak cassé
        this.userStats.streaks.current = 1;
      }
    } else {
      // Premier jour
      this.userStats.streaks.current = 1;
    }

    // Nouveau record?
    if (this.userStats.streaks.current > this.userStats.streaks.best) {
      this.userStats.streaks.best = this.userStats.streaks.current;
    }

    this.userStats.streaks.lastActiveDate = today;

    // Badge semaine parfaite
    if (this.userStats.streaks.current >= 7) {
      await this.awardBadge('PERFECT_WEEK');
    }
  }

  // 🎯 Objectifs quotidiens
  updateDailyGoals() {
    const today = new Date().toDateString();
    if (this.userStats.daily_goals.last_reset !== today) {
      // Reset quotidien
      this.userStats.daily_goals = {
        ...this.userStats.daily_goals,
        tickets_completed: 0,
        photos_taken: 0,
        last_reset: today
      };
    }
  }

  async completeDaily(type) {
    this.updateDailyGoals();

    switch (type) {
      case 'ticket':
        this.userStats.daily_goals.tickets_completed++;
        break;
      case 'photo':
        this.userStats.daily_goals.photos_taken++;
        break;
    }

    // Check si objectifs quotidiens atteints
    const ticketsComplete = this.userStats.daily_goals.tickets_completed >= this.userStats.daily_goals.tickets_target;
    const photosComplete = this.userStats.daily_goals.photos_taken >= this.userStats.daily_goals.photos_target;

    if (ticketsComplete && photosComplete) {
      await this.awardXP(100, 'Objectifs quotidiens complétés! 🎯');
    }

    await this.saveUserStats();
    return { ticketsComplete, photosComplete };
  }

  // 📊 Getters pour l'UI
  getCurrentLevel() {
    const levels = GamificationSystem.LEVELS;
    for (let i = levels.length - 1; i >= 0; i--) {
      if (this.userStats.xp >= levels[i].minXP) {
        return levels[i];
      }
    }
    return levels[0];
  }

  getProgressToNextLevel() {
    const currentLevel = this.getCurrentLevel();
    const levels = GamificationSystem.LEVELS;
    const currentIndex = levels.findIndex(l => l.level === currentLevel.level);

    if (currentIndex === levels.length - 1) {
      return { progress: 1, xpNeeded: 0, nextLevel: null };
    }

    const nextLevel = levels[currentIndex + 1];
    const xpInCurrentLevel = this.userStats.xp - currentLevel.minXP;
    const xpNeededForNext = nextLevel.minXP - currentLevel.minXP;

    return {
      progress: xpInCurrentLevel / xpNeededForNext,
      xpNeeded: nextLevel.minXP - this.userStats.xp,
      nextLevel
    };
  }

  getBadges() {
    return this.userStats.badges.map(badgeId => GamificationSystem.BADGES[badgeId]);
  }

  getStats() {
    return {
      ...this.userStats,
      currentLevel: this.getCurrentLevel(),
      progressToNext: this.getProgressToNextLevel()
    };
  }

  // 🎮 Animations et effets
  static getXPColor(amount) {
    if (amount >= 500) return '#FF2D92'; // Epic
    if (amount >= 200) return '#AF52DE'; // Rare
    if (amount >= 100) return '#FF9500'; // Uncommon
    return '#34C759'; // Common
  }

  static getBadgeRarityColor(rarity) {
    const colors = {
      common: '#8E8E93',
      uncommon: '#34C759',
      rare: '#007AFF',
      epic: '#AF52DE',
      legendary: '#FF2D92'
    };
    return colors[rarity] || colors.common;
  }
}

export default GamificationSystem;