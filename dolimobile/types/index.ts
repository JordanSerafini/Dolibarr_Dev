// Types pour le système de gamification BTP

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  xp: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface Level {
  level: number;
  title: string;
  minXP: number;
  color: string;
  icon: string;
}

export interface UserStats {
  xp: number;
  level: number;
  badges: string[];
  streaks: {
    current: number;
    best: number;
    lastActiveDate: string | null;
  };
  achievements: {
    tickets_completed: number;
    photos_taken: number;
    perfect_ratings: number;
    speed_completions: number;
    urgent_solved: number;
    night_interventions: number;
    weekend_interventions: number;
  };
  daily_goals: {
    tickets_target: number;
    tickets_completed: number;
    photos_target: number;
    photos_taken: number;
    last_reset: string;
  };
}

export interface XPReward {
  xpGained: number;
  totalXP: number;
  oldLevel: Level;
  newLevel: Level;
  leveledUp: boolean;
}

export interface Ticket {
  id: number;
  ref: string;
  statut: string;
  priorite: number;
  titre: string;
  description: string;
  fk_projet: number;
  fk_soc: number;
  fk_user_assign: number;
  date_creation: string;
  date_modification: string;
  gps_lat?: number;
  gps_lng?: number;
  zone_id?: number;
}

export interface Intervention {
  id: number;
  fk_ticket: number;
  fk_user: number;
  date_debut: string;
  date_fin?: string;
  diagnostic: string;
  solution?: string;
  statut: string;
  materiel_utilise?: string;
  cout_materiel: number;
  temps_passe: number;
}

export interface TicketMedia {
  id: number;
  fk_ticket: number;
  type_media: 'photo_avant' | 'photo_apres' | 'signature' | 'document';
  nom_fichier: string;
  chemin_fichier: string;
  date_creation: string;
  gps_lat?: number;
  gps_lng?: number;
  metadata?: string;
}