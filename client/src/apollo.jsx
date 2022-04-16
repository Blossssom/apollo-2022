import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://127.0.0.1:4000/graphql",
    cache: new InMemoryCache({
        typePolicies: {
            Movie: {
                fields: {
                    isLiked :{
                        merge(exist, income) {
                            if(exist) {
                                return exist;
                            }else {
                                return income;
                            }
                        }
                    }
                }
            }
        }
    }),
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, {id}, {cache}) => {
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked: (isLiked) => !isLiked
                    }
                });
            }
        }
    }
});

// react app 전체를 감싸는 graphql의 클라이언트 버전인 apollo export
export default client;