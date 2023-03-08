import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Coin {
    id: String
    symbol: String,
    name: String
  }
  
  type Query {
    coins: [Coin]
  }

  type Mutation {

  }
`;

export default typeDefs;
