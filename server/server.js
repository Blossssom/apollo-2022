import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import schema from "./graphql/schema"

const server = createServer({
    schema: {
        typeDefs: `type Bloxxom {
            name: String!,
            age: Int!,
            gender: String!
        }
        
        type Query {
            person: Bloxxom!
        }`,
        resolvers: resolvers
    }
});

server.start();

