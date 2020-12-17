const { ApolloError } = require('apollo-server');
const axios = require('axios');

const resolvers = {
  Hotel: {
    location: async (parent) => {
      const { data } = await axios.get(
        `http://${process.env.HOST_ONE}:5000/api/locations`
      );
      return data.data.find((loc) => loc.id === parent.locationId);
    },
  },

  Query: {
    hotels: async () => {
      try {
        const { data } = await axios.get(
          `http://${process.env.HOST_TWO}:5001/api/hotels`
        );
        return data.data;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },

  Mutation: {
    createBook: async (_, { input }) => {
      try {
        const body = JSON.stringify(input);
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        await axios.post(
          `http://${process.env.HOST_THREE}:5002/api/book`,
          body,
          config
        );

        return {
          status: 'success',
        };
      } catch (error) {
        console.log(error);
        return {
          status: 'fail',
        };
      }
    },
  },
};

module.exports = resolvers;
