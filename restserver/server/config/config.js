// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ============================
//  vencimiento token 
// ============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30
    // ============================
    //  SEMILLA
    // ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'
    // ============================
    //  Base de datos
    // ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// =====================
// google id    
// =====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '121788397788-1r7e3gk5j7qasqpf8s509qhlc4lt2l1k.apps.googleusercontent.com'