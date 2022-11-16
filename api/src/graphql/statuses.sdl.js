export const schema = gql`
  type Status {
    id: Int!
    status_name: String!
    tasks: [Task]!
  }

  type Query {
    statuses: [Status!]! @requireAuth
    status(id: Int!): Status @requireAuth
  }

  input CreateStatusInput {
    status_name: String!
  }

  input UpdateStatusInput {
    status_name: String
  }

  type Mutation {
    createStatus(input: CreateStatusInput!): Status! @requireAuth
    updateStatus(id: Int!, input: UpdateStatusInput!): Status! @requireAuth
    deleteStatus(id: Int!): Status! @requireAuth
  }
`
