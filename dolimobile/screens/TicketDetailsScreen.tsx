/**
 * 🎫 ÉCRAN DÉTAILS TICKET
 * Affichage complet d'un ticket avec actions
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function TicketDetailsScreen({ route, navigation }) {
  const { ticketId } = route.params;

  // Mock data - à remplacer par vos vraies données
  const ticketData = {
    id: ticketId,
    title: `Ticket #${ticketId}`,
    description: 'Description détaillée du ticket',
    status: 'En cours',
    priority: 'Haute',
    assignee: 'Technicien BTP',
    location: 'Chantier A',
    createdAt: '2025-01-15',
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#2a2a2a']}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Détails du Ticket</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.ticketCard}>
          <Text style={styles.ticketTitle}>{ticketData.title}</Text>
          
          <View style={styles.infoRow}>
            <FontAwesome5 name="flag" size={16} color="#FF6B6B" />
            <Text style={styles.infoText}>Priorité: {ticketData.priority}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <MaterialIcons name="assignment" size={16} color="#4ECDC4" />
            <Text style={styles.infoText}>Statut: {ticketData.status}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <MaterialIcons name="person" size={16} color="#45B7D1" />
            <Text style={styles.infoText}>Assigné à: {ticketData.assignee}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <MaterialIcons name="location-on" size={16} color="#FFA500" />
            <Text style={styles.infoText}>Lieu: {ticketData.location}</Text>
          </View>
          
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{ticketData.description}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Intervention', { ticketId })}
        >
          <LinearGradient
            colors={['#007AFF', '#0056CC']}
            style={styles.actionButtonGradient}
          >
            <MaterialIcons name="build" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Commencer l'intervention</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  ticketCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  ticketTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    color: '#ccc',
    fontSize: 16,
    marginLeft: 10,
  },
  description: {
    marginTop: 20,
  },
  descriptionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
  },
  actionButton: {
    marginBottom: 20,
  },
  actionButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});