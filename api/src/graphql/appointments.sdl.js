export const schema = gql`
  type Appointment {
    id: Int!
    summary: String!
    description: String!
    start: String!
    end: String!
    user_id: String!
  }
  #type Event {
  # summary: String!
  #description: String
  #start: String!
  #end: String!
  #}

  type Query {
    appointments(user_id: String!): [Appointment!]! @skipAuth
    appointment(id: Int!): Appointment @skipAuth
  }

  input CreateAppointmentInput {
    summary: String!
    description: String!
    start: String!
    end: String!
    user_id: String!
  }
  type Appointments {
    code: String!
    appointments: [Appointment!]
  }

  #type Events {
  # code: String!
  #events: [Event!]
  #}
  input UpdateAppointmentInput {
    summary: String
    description: String
    start: String
    end: String
    user_id: String
  }
  #type QUERY {
  # getEvents(start: String!, end: String!, code: String!): Events! @skipAuth
  #}

  type Mutation {
    addEvents(start: String, end: String, code: String): Int! @skipAuth
    createAppointment(input: CreateAppointmentInput!): Appointment! @requireAuth
    updateAppointment(id: Int!, input: UpdateAppointmentInput!): Appointment!
      @requireAuth
    deleteAppointment(id: Int!): Appointment! @requireAuth
    deleteAppointments(user_id: String!): Appointment! @skipAuth
  }
`
