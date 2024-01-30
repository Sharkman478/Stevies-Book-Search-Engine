const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks [String]!
    }

    type Book = {
        bookId: String!
        authors: [String]!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth = {
        token: ID!
        user: User
    }

    tyoe Query = {
        user(userId: ID!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
    
        saveBook(input: SaveBookInput!): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;