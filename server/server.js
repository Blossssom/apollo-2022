import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = createServer({
    schema: {
        typeDefs: `type Movie {
            id: Int!
            title: String!
            rating: Float!
            summary: String!
            medium_cover_image: String!
          }
          
          type Query {
            movies: [Movie]!
          }
          `,
        resolvers: resolvers
    }
});

server.start();