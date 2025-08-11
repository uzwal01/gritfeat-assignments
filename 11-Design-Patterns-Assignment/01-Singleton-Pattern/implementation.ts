
export class DatabaseConnection {
    private static instance: DatabaseConnection | null = null;

    // Make constructor private so no one can directly create an instance
    private constructor() {
        console.log("Connecting to the database...");
    }

    // Static method to get the single instance
    public static getInstance(): DatabaseConnection {
        if (DatabaseConnection.instance === null) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        console.log(`Executing SQL: ${sql}`);
    }
}
