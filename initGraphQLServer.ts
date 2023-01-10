import { ApolloServer } from 'apollo-server-express';
import {UserDetailsTypeDef} from './modules/user-details/user-details.type'
import {UserDetailsResolver} from './modules/user-details/user-details.resolver'
import { createApplication, Application } from 'graphql-modules';
import { applyMiddleware } from 'graphql-middleware';

import { MODULES } from './module'

import { GraphQLSchema } from 'graphql';

import * as mongo from './utils/mongo';

const application: Application = createApplication({
  modules: MODULES,
});

export const schema: GraphQLSchema = application.createSchemaForApollo();
const schemaWithMiddlewares = applyMiddleware(schema);


export const apolloServer = new ApolloServer({
  schema: schemaWithMiddlewares,
    typeDefs: [UserDetailsTypeDef],
    resolvers: [UserDetailsResolver],
  });
  
  // server.listen({port:5000}).then(({ url }) => {
  //   console.log(`Server listening at http://localhost:5000/`);
  // });
  

 mongo.connect();