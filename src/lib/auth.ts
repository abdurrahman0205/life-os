import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { Resend } from "resend";


const client = new MongoClient(process.env.BETTER_AUTH_DB_URL as string)
const resend = new Resend(process.env.RESEND_API_KEY)
const db = client.db('LifeOS')

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true
  },
  emailVerification: {
    sendVerificationEmail: async ({user, url}) => {
      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email as string,
        subject: 'Verify your new LifeOS account',
        html: `<h1>Verify your new LifeOS account</h1>
        <p>To verify your email address, please click <a href=${url}>here</a>.</p>
        <br/>
        <p>Don't share this link/email with anyone. We takes your account security very seriously. If you receive a suspicious email with a link to update your account information, do not click on the link—instead, report the email to lifeOS support team for investigation.</p>
        <br/>
        <br/>
        Thank you
        `
        
         
      })
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true
  },
  
  
  database: mongodbAdapter(db, {client})
});