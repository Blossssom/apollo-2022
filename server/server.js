import { createServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = createServer({
    schema: {
        typeDefs: `type Movie {
            id: Int!
            title: String!
            rating: Float
            language: String
            medium_cover_image: String
            description_intro: String
            genres: [String]
          }
          
          type Query {
            movies(limit: Int!, rating: Float!): [Movie]!
            movie(id: Int!): Movie
            suggestions(id: Int!): [Movie]!
          }
          `,
        resolvers: resolvers
    }
});



server.start();