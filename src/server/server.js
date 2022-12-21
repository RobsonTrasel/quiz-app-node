import express  from "express";
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import cors from 'cors'

export const app = express()
app.use(cors())
app.use(express.json())


