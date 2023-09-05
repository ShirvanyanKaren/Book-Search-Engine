const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../schemas');
const {expressMiddleware} = require('apollo-server-express');
const { authMiddleware } = require('../utils/auth');
const auth = require('../utils/auth');
const { db } = require('../models/User');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
 
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware( server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req,res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    }
    );
  }

  db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
  });

}

startApolloServer();

module.exports = router;
