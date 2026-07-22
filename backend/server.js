import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contactRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api', contactRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, errors: ['Route not found.'] })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ success: false, errors: ['Internal server error.'] })
})

app.listen(PORT, () => {
  console.log(`ANBI Consulting backend running on port ${PORT}`)
})
