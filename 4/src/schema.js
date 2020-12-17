const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Location {
    id: String
    name: String
  }

  type User {
    id: String
    email: String
  }

  type Hotel {
    _id: String
    name: String
    price: Int
    location: Location
    imageUrl: String
    totalRooms: Int
  }

  input Book {
    locationId: String
    hotelId: String
    qty: Int
    userId: String
  }

  type Query {
    hotels: [Hotel]
  }

  type Mutation {
    createBook(input: Book): BookResponse
  }

  type BookResponse {
    status: String
  }
`;

// const typeDefs = gql`
//     type Location {
//         id: ID
//         name: String
//     }

//     type User {
//         id: ID
//         email: String
//     }

//     type Hotel {
//         id: ID
//         name: String
//         price: Int
//         location: Location
//         imageUrl: String
//         totalRooms: Int
//     }

//     type Book {
//         locationId: String
//         hotelId: String
//         qty: Int
//         userId: String
//     }

//     type Query {
//         hotels: [Hotel]
//     }

//     type Mutation {
//         createBook(input: {locationId: ID, hotelId: ID, qty: Int, userId: ID}): Book
//     }

//     interface MutationResponse {
//         status: String!
//     }

//     type BookResponse implements MutationResponse {
//         status: String
//     }
// `;

module.exports = typeDefs;
