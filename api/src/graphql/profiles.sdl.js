export const schema = gql`
  type Profile {
    id: Int!
    FName: String!
    LName: String!
    currPass: String!
    newPass: String!
    confirmPass: String!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    FName: String!
    LName: String!
    currPass: String!
    newPass: String!
    confirmPass: String!
  }

  input UpdateProfileInput {
    FName: String
    LName: String
    currPass: String
    newPass: String
    confirmPass: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
