import path from 'path'
import dotenv from 'dotenv';


dotenv.config({ path: path.resolve(__dirname, '../.env') })

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  mongo: {
    MONGO_DB: process.env.MONGO_DB,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_PORT: process.env.MONGO_PORT
  }
}
