import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
    age: Int!
    club: String!
    country: String!
    position: Position! 
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player
    forwards: [Player!]!
    youngsters: [Player!]!
  }

  input AddPlayerInput {
    name: String!
    age: Int!
    club: String!
    country: String!
    position: Position!
  }

  type Mutation {
    addPlayer(input: AddPlayerInput!): Player!
    deletePlayer(id: ID!): [Player!]!
  }

  enum Position {
    Forward
    Midfielder
    Defender
    Goalkeeper
  }
`;