import { db } from 'src/lib/db'

export const tasks = () => {
  return db.task.findMany()
}

export const task = ({ id }) => {
  return db.task.findUnique({
    where: { id },
  })
}

export const createTask = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task = {
  status: (_obj, { root }) => {
    return db.task.findUnique({ where: { id: root?.id } }).status()
  },
}
