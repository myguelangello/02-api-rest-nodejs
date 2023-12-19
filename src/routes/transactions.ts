import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function transactionRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    // { title, amount, type: credit or debit}
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1, // Aqui está fazendo dessa forma para caso for debito ele só coloca como negativo para no resumo fazer a soma/subtração
    })

    return reply.status(201).send()
  })
}
