import { db } from 'src/lib/db'

export const profiles = () => {
  return db.profile.findMany()
}

export const profile = ({ id }) => {
  return db.profile.findUnique({
    where: { id },
  })
}

export const createProfile = ({ input }) => {
  return db.profile.create({
    data: input,
  })
}

export const updateProfile = ({ id, input }) => {
  return db.profile.update({
    data: input,
    where: { id },
  })
}

export const deleteProfile = ({ id }) => {
  return db.profile.delete({
    where: { id },
  })
}
