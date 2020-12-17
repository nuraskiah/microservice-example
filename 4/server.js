const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');
require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: 5003 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
