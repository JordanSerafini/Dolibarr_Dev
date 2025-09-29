/**
 * Script utilitaire pour générer automatiquement les interfaces TypeScript
 * à partir des structures de tables PostgreSQL
 */

export interface ColumnDefinition {
  name: string;
  type: string;
  nullable: boolean;
  defaultValue?: string;
}

export interface TableDefinition {
  name: string;
  columns: ColumnDefinition[];
}

/**
 * Convertit un type PostgreSQL en type TypeScript
 */
export function postgresToTypeScriptType(postgresType: string): string {
  const type = postgresType.toLowerCase();
  
  // Types numériques
  if (type.includes('integer') || type.includes('int')) {
    return 'number';
  }
  if (type.includes('numeric') || type.includes('decimal')) {
    return 'number';
  }
  if (type.includes('smallint')) {
    return 'number';
  }
  if (type.includes('bigint')) {
    return 'number';
  }
  if (type.includes('real') || type.includes('float') || type.includes('double')) {
    return 'number';
  }
  
  // Types texte
  if (type.includes('text') || type.includes('varchar') || type.includes('char')) {
    return 'string';
  }
  
  // Types booléens
  if (type.includes('boolean') || type.includes('bool')) {
    return 'boolean';
  }
  
  // Types date/temps
  if (type.includes('timestamp') || type.includes('date') || type.includes('time')) {
    return 'Date | string';
  }
  
  // Types UUID
  if (type.includes('uuid')) {
    return 'string';
  }
  
  // Types binaires
  if (type.includes('bytea')) {
    return 'Buffer | Uint8Array';
  }
  
  // Types JSON
  if (type.includes('json')) {
    return 'any';
  }
  
  // Par défaut
  return 'any';
}

/**
 * Génère une interface TypeScript à partir d'une définition de table
 */
export function generateInterface(tableDef: TableDefinition): string {
  const interfaceName = tableDef.name.charAt(0).toUpperCase() + tableDef.name.slice(1);
  
  let interfaceCode = `/**
 * Interface pour la table ${tableDef.name}
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ${interfaceName} {\n`;
  
  for (const column of tableDef.columns) {
    const tsType = postgresToTypeScriptType(column.type);
    const optional = column.nullable ? '?' : '';
    
    interfaceCode += `  /** ${column.name} - ${column.type}${column.nullable ? ' (nullable)' : ''} */\n`;
    interfaceCode += `  ${column.name}${optional}: ${tsType};\n\n`;
  }
  
  interfaceCode += '}\n\n';
  
  return interfaceCode;
}

/**
 * Génère un fichier d'index avec toutes les exports
 */
export function generateIndexFile(interfaces: string[]): string {
  let indexCode = `/**
 * Index des interfaces EBP
 * Généré automatiquement
 */

`;
  
  for (const interfaceName of interfaces) {
    indexCode += `export * from './${interfaceName}';\n`;
  }
  
  return indexCode;
}

/**
 * Nettoie un nom de table pour l'utiliser comme nom de fichier
 */
export function sanitizeFileName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
}
