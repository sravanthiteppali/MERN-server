const { gql } = require('apollo-server-express');

const typeDef = gql`
    type User {
        id: ID!,
        name: String!,
        email: String!,
        password: String!
    }

    input createUserInput {
        name: String!,
        email: String!,
        password: String!
    }

    type Query {
        getUsers: [User],
        getUsersByName(name: String!): [User]
    }

    type Mutation {
        createUser(input: createUserInput!): User,
        changePass(id: ID!, password: String!): User
    }
`;

module.exports = typeDef;