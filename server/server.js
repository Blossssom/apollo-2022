import { createServer } from "graphql-yoga";
// import {resolvers} from "./graphql/resolvers";

const server = createServer({
    // schema: {
    //     typeDefs: `type Query {
    //         person: String!
    //       }`,
    //     resolvers: resolvers
    // }
});

server.start();

