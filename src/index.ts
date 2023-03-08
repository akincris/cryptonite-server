import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fetch from "node-fetch";

// definition and your set of resolvers.
const COIN_API_URL = "https://api.coingecko.com/api/v3/coins";

function getCoinData(endpoint: string) {
  const url = new URL(`${COIN_API_URL}/${endpoint}`);
  return fetch(url.toString());
}

const resolvers = {
  Query: {
    coins: async () => {
      const response = getCoinData("list")
        .then(async (res) => {
          const r = await res.json();
          return r;
        })
        .catch((error) => {
          console.log("error");
        });
      return response;
    },
  },
};

const typeDefs = `#graphql
  type Coin {
    id: String
    symbol: String,
    name: String
  }
  
  type Query {
    coins: [Coin]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
