const bloxxom = {
    name: "bloxxom",
    age: 18,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => bloxxom
    }
};

export default resolvers;