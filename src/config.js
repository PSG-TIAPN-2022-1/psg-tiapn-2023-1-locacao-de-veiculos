import { config } from "dotenv";
config();



export default{
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || 'hobio',
    dbPassword: process.env.DB_PASSWORD || 'hobio123',
    dbServer: process.env.DB_SERVER || 'localhost',
    dbDataBase: process.env.DB_DATABASE || 'LOCACAO_VEICULOS',

};