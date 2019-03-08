//const env = process.env.NODE_ENV;
const env = "dev";
const dev = {
  database: "bigbase",
  username: "THESECRETUSERNAME",
  password: "THESECRETPASS",
  expressport: 8080,
  dbhost: "localhost"
};

const production = {
  database: process.env.DATABASENAME,
  username: process.env.DATABASEUSERNAME,
  password: process.env.DATABASEPASSWORD,
  expressport: parseInt(process.env.EXPRESSPORT),
  dbhost: process.env.DATABASEHOST
};

const config = {
  dev,
  production
};

module.exports = config[env];
