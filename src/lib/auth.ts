import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.BETTER_AUTH_DB_URL as string)
const db = client.db('LifeOS')

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  database: mongodbAdapter(db, {client})
});