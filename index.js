const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const middleware = require('./middleware');

module.exports = function() {
  const app = express();

  app.use(express.json());
  app.use(cors())
  
  app.use(middleware.logger);
  // app.use(middleware.authenticator);

  app.use('/characters', routes.characters);
  app.use('/forces', routes.forces);
  app.use('/items', routes.items);
  app.use('/maps', routes.maps);
  app.use('/mapTiles', routes.mapTiles);
  app.use('/modules', routes.modules);
  app.use('/terrainTypes', routes.terrainTypes);
  app.use('/users', routes.users);

  return app;
};
;