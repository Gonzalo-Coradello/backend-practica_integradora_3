import dotenv from "dotenv";
import options from './process.js'

const environment = options.mode

dotenv.config({
  path: environment === "development" ? "./.env.development" : "./.env.production"
});

export default {
  BASE_URL: process.env.BASE_URL,
  PORT: process.env.PORT,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  COOKIE_NAME: process.env.COOKIE_NAME,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  ADMIN_ID: process.env.ADMIN_ID,
  SESSION_SECRET: process.env.SESSION_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  USER_MAIL: process.env.USER_MAIL,
  USER_PASS: process.env.USER_PASS
};
