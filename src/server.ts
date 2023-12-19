import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

/* A ordem dos plugins é a ordem que o fastify vai executar cada um */
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server is running!!!')
  })
  .catch((error) => {
    console.error(error)
  })
