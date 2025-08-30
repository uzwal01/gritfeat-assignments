import dotenv from "dotenv";
dotenv.config();

const rawPort = process.env.PORT;
const PORT = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8080;


export { PORT };