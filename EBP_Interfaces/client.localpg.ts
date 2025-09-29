import { Client } from 'pg';

const config = {
  host: 'localhost',
  port: 5432,
  database: 'sli_db',
  user: 'postgres',
  password: 'postgres',
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  max: 20,
};

export class LocalPostgresClient {
  private client: Client;

  constructor() {
    this.client = new Client(config);
  }


  async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('✅ Connexion à la base de données locale établie');
    } catch (error) {
      console.error('❌ Erreur de connexion à la base de données:', error);
      throw error;
    }
  }


  async disconnect(): Promise<void> {
    try {
      await this.client.end();
      console.log('✅ Déconnexion de la base de données');
    } catch (error) {
      console.error('❌ Erreur lors de la déconnexion:', error);
    }
  }


  async query<T = any>(sql: string, params?: any[]): Promise<T[]> {
    try {
      const result = await this.client.query(sql, params);
      return result.rows;
    } catch (error) {
      console.error('❌ Erreur lors de l\'exécution de la requête:', error);
      console.error('SQL:', sql);
      console.error('Params:', params);
      throw error;
    }
  }


  async getAllTables(): Promise<string[]> {
    const sql = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name
    `;
    
    const result = await this.query<{ table_name: string }>(sql);
    return result.map(row => row.table_name);
  }

  async getTableStructure(tableName: string): Promise<ColumnInfo[]> {
    const sql = `
      SELECT 
        column_name,
        data_type,
        is_nullable,
        column_default,
        ordinal_position
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = $1
      ORDER BY ordinal_position
    `;
    
    const result = await this.query<ColumnInfo>(sql, [tableName]);
    return result;
  }


  async testConnection(): Promise<boolean> {
    try {
      const result = await this.query('SELECT 1 as test');
      return result.length > 0 && result[0].test === 1;
    } catch (error) {
      console.error('❌ Test de connexion échoué:', error);
      return false;
    }
  }
}


export interface ColumnInfo {
  column_name: string;
  data_type: string;
  is_nullable: string;
  column_default?: string;
  ordinal_position: number;
}


export const localPgClient = new LocalPostgresClient();


export function getLocalPgClient(): LocalPostgresClient {
  return localPgClient;
}
