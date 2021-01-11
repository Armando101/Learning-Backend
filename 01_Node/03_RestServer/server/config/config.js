// Puerto
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'dev';
const EXPIRATION_TOKEN = process.env.EXPIRATION_TOKEN || (60 * 60 * 24 * 30);
const SEED = process.env.SEED = 'developer-seed';

module.exports = {
  PORT,
  NODE_ENV,
  EXPIRATION_TOKEN,
  SEED
}