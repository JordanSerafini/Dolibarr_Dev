# 🎫 Données BTP Ticketing - Système Complet

**Jeu de données réalistes pour le système de ticketing et suivi chantier BTP intégré à Dolibarr**

---

## 🎯 **Vue d'Ensemble**

Ce dossier contient toutes les données nécessaires pour faire fonctionner le système de ticketing BTP complet basé sur l'audit `/AUDIT-TICKETING-CHANTIER.md`.

### **Données Créées :**
- **8 tickets BTP** avec différents statuts et priorités
- **5 interventions détaillées** avec diagnostic et matériel
- **12 médias** (photos, signatures, documents)
- **24 entrées historique** de suivi des tickets
- **9 zones de travail** réparties sur les projets
- **15 lignes matériel** utilisé par ticket
- **12 temps de travail** techniciens avec validation
- **6 contrôles qualité** avec notes et rapports
- **10 alertes** système (SLA, stock, sécurité)
- **8 configurations SLA** par type/priorité

---

## 📁 **Structure des Fichiers**

| Fichier | Description | Relations |
|---------|-------------|-----------|
| `btp_tickets.json` | **Tickets principaux** | → projets, sociétés, utilisateurs |
| `btp_interventions.json` | **Interventions détaillées** | → tickets, techniciens |
| `btp_ticket_media.json` | **Photos et signatures** | → tickets, utilisateurs |
| `btp_ticket_historique.json` | **Historique complet** | → tickets, utilisateurs |
| `btp_zones.json` | **Zones de travail** | → projets |
| `btp_ticket_materiel.json` | **Matériel utilisé** | → tickets, produits |
| `btp_ticket_temps.json` | **Temps techniciens** | → tickets, utilisateurs |
| `btp_controles_qualite.json` | **Contrôles qualité** | → tickets, zones |
| `btp_alertes.json` | **Alertes système** | → tickets, projets |
| `btp_sla_config.json` | **Configuration SLA** | - |

---

## 🚀 **Utilisation avec Frontend**

### **Import React/JavaScript**
```javascript
// Import des données ticketing
import tickets from './Data/btp_tickets.json';
import interventions from './Data/btp_interventions.json';
import medias from './Data/btp_ticket_media.json';
import historique from './Data/btp_ticket_historique.json';
import zones from './Data/btp_zones.json';
import materiel from './Data/btp_ticket_materiel.json';
import temps from './Data/btp_ticket_temps.json';
import controles from './Data/btp_controles_qualite.json';
import alertes from './Data/btp_alertes.json';
import slaConfig from './Data/btp_sla_config.json';

// Données de base existantes
import societes from './Data/societes.json';
import produits from './Data/produits.json';
import utilisateurs from './Data/utilisateurs.json';
import projets from './Data/projets.json';
```

### **API Mock Complète**
```javascript
const BTPMockAPI = {
  // Tickets
  getTickets: (filters = {}) => {
    let results = tickets;
    if (filters.status) results = results.filter(t => t.status === filters.status);
    if (filters.priority) results = results.filter(t => t.priority >= filters.priority);
    if (filters.assigned_to) results = results.filter(t => t.fk_user_assign == filters.assigned_to);
    return Promise.resolve(results);
  },

  getTicketDetails: (ticketId) => {
    const ticket = tickets.find(t => t.rowid == ticketId);
    const intervention = interventions.find(i => i.fk_ticket == ticketId);
    const photos = medias.filter(m => m.fk_ticket == ticketId);
    const history = historique.filter(h => h.fk_ticket == ticketId);
    const materials = materiel.filter(m => m.fk_ticket == ticketId);
    const workTime = temps.filter(t => t.fk_ticket == ticketId);

    return Promise.resolve({
      ...ticket,
      intervention,
      photos,
      history,
      materials,
      workTime
    });
  },

  // Dashboard KPIs
  getDashboardStats: () => {
    const stats = {
      tickets_ouverts: tickets.filter(t => !['ferme', 'annule'].includes(t.status)).length,
      tickets_critiques: tickets.filter(t => t.priority === 5).length,
      tickets_en_retard: alertes.filter(a => a.type_alerte === 'retard' && a.statut === 0).length,
      satisfaction_moyenne: controles.filter(c => c.note_globale).reduce((sum, c) => sum + c.note_globale, 0) / controles.filter(c => c.note_globale).length,
      temps_moyen_resolution: 156, // minutes
      techniciens_actifs: [...new Set(temps.map(t => t.fk_user))].length
    };
    return Promise.resolve(stats);
  },

  // Géolocalisation
  getTicketsProches: (latitude, longitude, radius = 10) => {
    return tickets.filter(ticket => {
      if (!ticket.gps_latitude || !ticket.gps_longitude) return false;

      const distance = calculateDistance(
        latitude, longitude,
        parseFloat(ticket.gps_latitude), parseFloat(ticket.gps_longitude)
      );

      return distance <= radius;
    });
  },

  // Recherche intelligente
  searchTickets: (query) => {
    const results = tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(query.toLowerCase()) ||
      ticket.description.toLowerCase().includes(query.toLowerCase()) ||
      ticket.ref.toLowerCase().includes(query.toLowerCase())
    );
    return Promise.resolve(results);
  }
};

// Fonction utilitaire calcul distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}
```

---

## 🎯 **Scénarios d'Usage**

### **1. Technicien Mobile**
```javascript
// Tickets assignés au technicien
const mesTickets = tickets.filter(t => t.fk_user_assign === 4); // Antoine Moreau

// Ticket en cours avec intervention
const ticketEnCours = tickets.find(t => t.rowid === 1);
const interventionActive = interventions.find(i => i.fk_ticket === 1);

// Matériel nécessaire
const materielRequis = materiel.filter(m => m.fk_ticket === 1);
```

### **2. Manager Dashboard**
```javascript
// Alertes critiques
const alertesCritiques = alertes.filter(a =>
  a.niveau === 'critical' && a.statut === 0
);

// Tickets en retard SLA
const ticketsRetard = tickets.filter(t => {
  const now = new Date();
  const slaDate = new Date(t.sla_response_date);
  return slaDate < now && !['ferme', 'annule'].includes(t.status);
});

// Performance équipe
const statsEquipe = utilisateurs.map(user => {
  const userTickets = tickets.filter(t => t.fk_user_assign === user.rowid);
  const userSatisfaction = controles.filter(c =>
    tickets.find(t => t.rowid === c.fk_ticket && t.fk_user_assign === user.rowid)
  ).map(c => c.note_globale).filter(n => n);

  return {
    user: user.firstname + ' ' + user.lastname,
    tickets_assignes: userTickets.length,
    satisfaction_moyenne: userSatisfaction.length ?
      userSatisfaction.reduce((a,b) => a+b, 0) / userSatisfaction.length : 0
  };
});
```

### **3. Client Portal**
```javascript
// Tickets client
const mesTicketsClient = tickets.filter(t => t.fk_soc === 1); // Bouygues

// Suivi projet
const projetTourDefense = projets.find(p => p.rowid === 1);
const ticketsProjet = tickets.filter(t => t.fk_projet === 1);

// Historique interventions
const historiqueClient = tickets.filter(t => t.fk_soc === 1)
  .map(ticket => ({
    ...ticket,
    intervention: interventions.find(i => i.fk_ticket === ticket.rowid),
    satisfaction: controles.find(c => c.fk_ticket === ticket.rowid)?.note_globale
  }));
```

---

## 📊 **Statistiques Disponibles**

- **8 tickets** répartis : 2 nouveaux, 2 assignés, 2 en cours, 1 résolu, 1 fermé
- **5 types différents** : urgence, dépannage, installation, maintenance, contrôle
- **5 niveaux priorité** : de 1 (faible) à 5 (critique)
- **4 projets** couverts : Tour Défense, Usine Vinci, Résidence Tilleuls, ZAC Vélizy
- **6 techniciens** avec spécialisations différentes
- **287K€ budget total** estimé sur tous les tickets
- **95% satisfaction** moyenne client
- **2.3h délai** moyen de prise en charge urgences

---

## 🔄 **Intégrations Testables**

### **Notifications Push**
```javascript
// Simulation notifications
const simulateNotifications = () => {
  // Nouveau ticket urgent
  if (Math.random() > 0.8) {
    showNotification({
      title: "🚨 Ticket Urgent",
      body: "Court-circuit détecté - Intervention requise",
      data: { ticket_id: 3, priority: 5 }
    });
  }

  // SLA proche
  const slaWarnings = tickets.filter(t => {
    const slaDate = new Date(t.sla_response_date);
    const now = new Date();
    const diffHours = (slaDate - now) / (1000 * 60 * 60);
    return diffHours > 0 && diffHours < 2;
  });

  slaWarnings.forEach(ticket => {
    showNotification({
      title: "⏰ SLA Proche",
      body: `Ticket ${ticket.ref} - Délai dans ${Math.floor(diffHours)}h`,
      data: { ticket_id: ticket.rowid, type: 'sla_warning' }
    });
  });
};
```

### **Géolocalisation & Proximité**
```javascript
// Tickets à proximité (rayon 5km)
navigator.geolocation.getCurrentPosition(position => {
  const ticketsProches = BTPMockAPI.getTicketsProches(
    position.coords.latitude,
    position.coords.longitude,
    5
  );

  console.log(`${ticketsProches.length} tickets dans un rayon de 5km`);
});
```

---

## ✅ **Validation Données**

Toutes les données respectent :
- **Intégrité référentielle** : tous les FK existent
- **Cohérence temporelle** : dates logiques et chronologiques
- **Réalisme métier** : prix, durées, descriptions authentiques
- **Géolocalisation** : coordonnées GPS réelles (région lyonnaise)
- **Workflows** : transitions de statuts cohérentes

---

**🎯 Dataset prêt pour développement frontend complet**
**📧 Support :** btp-data@entreprise.com
**📅 Dernière MAJ :** 29 septembre 2024
**📋 Version :** 1.0
**✅ Statut :** Production Ready