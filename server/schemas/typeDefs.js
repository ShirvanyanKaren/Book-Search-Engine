const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    }
type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String

}
    


input inputBook {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
    
type Auth {
    token: ID!
    user: User
}      
    
type Query {
    users: [User]
    user(username: String!): User
    me: User
    books(username: String): [Book]
    book(bookId: ID!): Book
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: inputBook!): User
    removeBook(bookId: ID!): User
}
        
 `;
