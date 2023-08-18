const { gql } = require('apollo-server');

const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
    age: Int!
    club: String!
    country: String!
    position: String! 
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player
    forwards: [Player!]!
    youngsters: [Player!]!
  }

  input addPlayerInput {
    name: String!
    age: Int!
    club: String!
    country: String!
    position: String!
  }

  type Mutation {
    addPlayer(input: addPlayerInput!): Player!
    deletePlayer(id: ID!): [Player!]!
  }

  enum Position {
    Forward
    Midfielder
    Defender
    Goalkeeper
  }
`;

module.exports = { typeDefs };