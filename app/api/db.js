import mysql from 'mysql2/promise';

export async function query({query, values=[]}){
const dbconnection =await mysql.createConnection({
  host: 'localhost',
  // user: 'root',
  // password: '',

  user:'root',
  password: 'pna#mysql#4321',
  database: 'ritam',
  
});

try{
const [results]=await dbconnection.execute(query, values);
dbconnection.end();
return results;
}catch(error){
    throw Error(error.message);
    return{error};
}


};
