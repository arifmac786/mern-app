import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

export const mongoUri = process.env.MONGO_URI
export const port = process.env.PORT