export const schema = gql`
  type Task {
    id: Int!
    created_at: DateTime!
    title: String!
    user_id: String!
    status_id: Int!
    status: Status!
    urgency: String!
    priority: Int!
    date: DateTime!
  }

  type Query {
    tasks(user_id: String!): [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    title: String!
    user_id: String!
    status_id: Int!
    urgency: String!
    priority: Int!
    date: DateTime!
  }

  input UpdateTaskInput {
    title: String
    user_id: String
    status_id: Int
    urgency: String
    priority: Int
    date: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
