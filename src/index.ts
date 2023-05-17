import app from './config/config-express'
import env from 'dotenv'

env.config()

const port: string | undefined = process.env.PORT || "3002"

app.listen( parseInt(port), '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
