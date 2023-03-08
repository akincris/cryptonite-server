// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";
import { environment } from "./interfaces/enviroment";
import resolvers from "./resolvers";
import typeDefs from "./type-defs";
import express, { Request, Response } from "express";
import cors from "cors";
// import { assetsMiddleware, authMiddleware } from "./middleware/auth";
// import { retrieveFile } from "./utils/s3";


// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);