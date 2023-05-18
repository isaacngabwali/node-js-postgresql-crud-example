module.exports = {
  HOST: "localhost",
  USER: "fanitetest",
  PASSWORD: "fanitetest",
  DB: "fanitetest",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
