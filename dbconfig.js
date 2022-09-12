
const config = {
    user: 'test',//db user
    password: '12345678',//password
    database: 'Pizza',//schema name
    server: 'eegii10155',//server
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    }
  };
  
module.exports=config;