import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const init = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

init();
