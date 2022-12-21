import express  from "express";
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(express.json())


app.listen(3000, () => {
  console.log('[Server] Server running.')
})