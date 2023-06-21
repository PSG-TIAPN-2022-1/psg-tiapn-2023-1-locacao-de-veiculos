import sql from 'mssql';
import config from '../config';

const dbSettings = {
     user: config.dbUser,
     password: config.dbPassword,
     server: config.dbServer,
     database: config.dbDataBase,
     options : {
        encrypt: false,
        trustServerCertificate: true
     }
};

export async function getConnection(){
    
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.log(error)
    }
}

export {sql};

