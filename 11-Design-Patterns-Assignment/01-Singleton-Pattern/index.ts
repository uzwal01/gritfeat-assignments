
import { DatabaseConnection } from "./implementation";

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log("Are both connections same?", db1 === db2);

db1.query("SELECT * FROM users");
db2.query("INSERT INTO users VALUES ('Ujjwal')");
