export const typeDefs = `#graphql
  type Coin {
    id: String
    symbol: String,
    name: String
  }
  
  type Query {
    coins: [Coin]
  }
`;