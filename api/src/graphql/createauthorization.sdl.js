export const schema = gql`
  type AuthorizationURL {
    url: String!
  }

  type Query {
    getAuthorizationURL: AuthorizationURL! @skipAuth
  }
`
