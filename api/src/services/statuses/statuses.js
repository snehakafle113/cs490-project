import { db } from 'src/lib/db'

export const statuses = () => {
  return db.status.findMany()
}

export const status = ({ id }) => {
  return db.status.findUnique({
    where: { id },
  })
}

export const createStatus = ({ input }) => {
  return db.status.create({
    data: input,
  })
}

export const updateStatus = ({ id, input }) => {
  return db.status.update({
    data: input,
    where: { id },
  })
}

export const deleteStatus = ({ id }) => {
  return db.status.delete({
    where: { id },
  })
}

export const Status = {
  tasks: (_obj, { root }) => {
    return db.status.findUnique({ where: { id: root?.id } }).tasks()
  },
}
