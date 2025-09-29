/**
 * Script de génération automatique de toutes les interfaces TypeScript
 * à partir de la base de données PostgreSQL locale
 */

import { postgresToTypeScriptType, generateInterface, generateIndexFile, sanitizeFileName } from './generate-interfaces';
import { getLocalPgClient, ColumnInfo } from './client.localpg';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Convertit les informations de colonne en définition de table
 */
function convertToTableDefinition(tableName: string, columns: ColumnInfo[]) {
  return {
    name: tableName,
    columns: columns.map(col => ({
      name: col.column_name,
      type: col.data_type,
      nullable: col.is_nullable === 'YES',
      defaultValue: col.column_default
    }))
  };
}

/**
 * Génère toutes les interfaces
 */
async function generateAllInterfaces() {
  console.log('🔄 Début de la génération des interfaces...');
  
  const client = getLocalPgClient();
  
  try {
    // Se connecter à la base de données
    await client.connect();
    
    // Tester la connexion
    const isConnected = await client.testConnection();
    if (!isConnected) {
      throw new Error('Impossible de se connecter à la base de données');
    }
    
    // Récupérer toutes les tables
    const tables = await client.getAllTables();
    console.log(`📋 ${tables.length} tables trouvées`);
    
    const generatedFiles: string[] = [];
    
    // Générer une interface pour chaque table
    for (let i = 0; i < tables.length; i++) {
      const tableName = tables[i];
      console.log(`📝 Génération de l'interface pour ${tableName}... (${i + 1}/${tables.length})`);
      
      try {
        // Récupérer la structure de la table
        const columns = await client.getTableStructure(tableName);
        
        if (columns.length > 0) {
          // Convertir en définition de table
          const tableDef = convertToTableDefinition(tableName, columns);
          
          // Générer l'interface
          const interfaceCode = generateInterface(tableDef);
          
          // Créer le fichier
          const fileName = sanitizeFileName(tableName);
          const filePath = path.join(__dirname, `${fileName}.ts`);
          
          // Écrire le fichier
          await fs.writeFile(filePath, interfaceCode, 'utf8');
          
          generatedFiles.push(fileName);
          console.log(`✅ Interface générée pour ${tableName}`);
        } else {
          console.log(`⚠️  Aucune colonne trouvée pour ${tableName}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors de la génération de ${tableName}:`, error);
      }
    }
    
    // Générer le fichier d'index
    const indexCode = generateIndexFile(generatedFiles);
    const indexPath = path.join(__dirname, 'index.ts');
    await fs.writeFile(indexPath, indexCode, 'utf8');
    
    console.log(`🎉 Génération terminée ! ${generatedFiles.length} interfaces créées.`);
    console.log(`📁 Fichier d'index créé: ${indexPath}`);
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération:', error);
  } finally {
    // Se déconnecter
    await client.disconnect();
  }
}

// Exporter la fonction principale
export { generateAllInterfaces };

// Si le script est exécuté directement
if (require.main === module) {
  generateAllInterfaces();
}
