import {UserDetailsTypeDef} from './user-details.type'
import {createModule} from 'graphql-modules'
import {UserDetailsResolver} from './user-details.resolver'


export const UserDetailsModule = createModule({
    id: 'user-details-module',
    dirname: __dirname,
    typeDefs: [UserDetailsTypeDef],
    resolvers: [UserDetailsResolver],
  });
