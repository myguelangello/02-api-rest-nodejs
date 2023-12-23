import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionRoutes } from './routes/transactions'

export const app = fastify()

/* A ordem dos plugins é a ordem que o fastify vai executar cada um */
app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
