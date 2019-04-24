

process.env.host = process.env.host || 'http://localhost:8080/';

//==========Variables de entorno================
//=============== PUERTO =======================
process.env.api_port = process.env.api_port || 3000;
process.env.jwt_secret = process.env.jwt_secret || 'consultorio'

//============== DATA BASE =====================
process.env.db_host = process.env.db_host || "localhost";
process.env.db_name = process.env.db_name || "db_consultorio";
process.env.db_user = process.env.db_user || "root";
process.env.db_pass = process.env.db_pass || "root";


// host: process.env.db_host,
// user: process.env.db_user,
// database: process.env.db_name,
// pass: process.env.db_pass


console.log('Server Port:', process.env.api_port);
console.log('DB Host:', process.env.db_host);
console.log('DB Name:', process.env.db_name); 
console.log('DB User:', process.env.db_user);
console.log('HOST API:', process.env.host );