import { gql } from 'apollo-server'

export const UserDetailsTypeDef = gql`
type Note {
  _id: ID
    name: String!,
    address: String!,
    age: Int!,
    email:String!
  }

  input NoteInputData {
    name: String!,
    address: String!,
    age: Int!,
    email:String!
  }

  type Query {
    getNotes: [Note!]!
    getNote(id: ID!): Note!
  }

  input NoteInputData {
    name: String!,
    address: String!,
    age: Int!,
    email:String!
  }

  type Mutation {
    createNote(noteInput: NoteInputData): Note!
    updateNote(id: ID!, noteInput: NoteInputData): Note!
    deleteNote(id: ID!): Boolean
  }
`;
