import dotenv from 'dotenv'
import { app, router } from './src'

dotenv.config()


app.listen(PORT, () => {
  console.log('[Server] Server running.')
})