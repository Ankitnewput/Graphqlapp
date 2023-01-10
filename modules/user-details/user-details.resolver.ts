import * as userDetailsService from '../../services/user-details.service'

export const UserDetailsResolver = {
  Query: {
    getNote: async (parent:any, args:any) => {
      console.log('--->')
      return await userDetailsService.getNoteData(args);
    },
    getNotes: async (parent:any, args:any) => {
      console.log('--->')
      return await userDetailsService.getNotesData(args);
    },
  },

  Mutation: {
    createNote: async (parent:any, args:any) => {
      console.log('--->')
      return await userDetailsService.createNoteData(args);
    },
  updateNote: async (parent:any, args:any) => {
    console.log('--->')
    return await userDetailsService.updateNoteData(args);
  },
  deleteNote: async (parent:any, args:any) => {
    console.log('--->')
    return await userDetailsService.deleteNoteData(args);
  },
}
}


