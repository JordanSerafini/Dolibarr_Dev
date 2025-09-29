/**
 * 🔍 FORMULAIRE DE DIAGNOSTIC
 * Étape de diagnostic pour intervention BTP
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function DiagnosticFormScreen({ route, navigation }) {
  const [diagnosticData, setDiagnosticData] = useState({
    problemeIdentifie: '',
    causeRacine: '',
    solutionProposee: '',
    materielNecessaire: '',
    tempsEstime: '',
    priorite: 'normale',
  });

  const handleSubmit = () => {
    if (!diagnosticData.problemeIdentifie || !diagnosticData.solutionProposee) {
      Alert.alert('Erreur', 'Veuillez remplir les champs obligatoires');
      return;
    }

    Alert.alert(
      'Diagnostic enregistré',
      'Le diagnostic a été sauvegardé avec succès',
      [
        {
          text: 'Continuer vers la réparation',
          onPress: () => navigation.navigate('RepairForm'),
        },
        {
          text: 'Retour',
          onPress: () => navigation.goBack(),
        },
      ]
    );
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
        <Text style={styles.headerTitle}>Diagnostic</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.formCard}>
          <View style={styles.stepIndicator}>
            <FontAwesome5 name="search" size={20} color="#4ECDC4" />
            <Text style={styles.stepText}>Étape 1: Diagnostic</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Problème identifié *
            </Text>
            <TextInput
              style={styles.textInput}
              value={diagnosticData.problemeIdentifie}
              onChangeText={(text) => setDiagnosticData({...diagnosticData, problemeIdentifie: text})}
              placeholder="Décrivez le problème principal..."
              placeholderTextColor="#666"
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Cause racine</Text>
            <TextInput
              style={styles.textInput}
              value={diagnosticData.causeRacine}
              onChangeText={(text) => setDiagnosticData({...diagnosticData, causeRacine: text})}
              placeholder="Quelle est la cause du problème?"
              placeholderTextColor="#666"
              multiline
              numberOfLines={2}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Solution proposée *
            </Text>
            <TextInput
              style={styles.textInput}
              value={diagnosticData.solutionProposee}
              onChangeText={(text) => setDiagnosticData({...diagnosticData, solutionProposee: text})}
              placeholder="Comment résoudre ce problème?"
              placeholderTextColor="#666"
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Matériel nécessaire</Text>
            <TextInput
              style={styles.textInput}
              value={diagnosticData.materielNecessaire}
              onChangeText={(text) => setDiagnosticData({...diagnosticData, materielNecessaire: text})}
              placeholder="Liste du matériel requis..."
              placeholderTextColor="#666"
              multiline
              numberOfLines={2}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Temps estimé (heures)</Text>
            <TextInput
              style={styles.textInputShort}
              value={diagnosticData.tempsEstime}
              onChangeText={(text) => setDiagnosticData({...diagnosticData, tempsEstime: text})}
              placeholder="2.5"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Priorité</Text>
            <View style={styles.priorityButtons}>
              {['basse', 'normale', 'haute', 'critique'].map((priority) => (
                <TouchableOpacity
                  key={priority}
                  style={[
                    styles.priorityButton,
                    diagnosticData.priorite === priority && styles.priorityButtonActive
                  ]}
                  onPress={() => setDiagnosticData({...diagnosticData, priorite: priority})}
                >
                  <Text style={[
                    styles.priorityButtonText,
                    diagnosticData.priorite === priority && styles.priorityButtonTextActive
                  ]}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <LinearGradient
            colors={['#4ECDC4', '#44A08D']}
            style={styles.submitButtonGradient}
          >
            <MaterialIcons name="check-circle" size={24} color="#fff" />
            <Text style={styles.submitButtonText}>Valider le diagnostic</Text>
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
  formCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  stepText: {
    color: '#4ECDC4',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    textAlignVertical: 'top',
  },
  textInputShort: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    width: 100,
  },
  priorityButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  priorityButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#666',
  },
  priorityButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  priorityButtonText: {
    color: '#666',
    fontSize: 14,
  },
  priorityButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    marginBottom: 30,
  },
  submitButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});