import { userModel } from "../models/user-details.model";

export async function getNoteData(args:any): Promise<any> {
  try {
    const { id } = args;
    const note = await userModel.findById(id);
    if (!note) {
      const error = new Error("No note found!");
      error.message = '404';
      throw error;
    }

    return note;
  } catch (error:any) {
    throw new Error(error);
  }
}

export async function getNotesData(args:any): Promise<any> {
  try {
    const notes = await userModel.find();
    return notes;
  } catch (error:any) {
    throw new Error(error);
  }
}


export async function createNoteData(args:any): Promise<any> {
  console.log('service')
  try {
    const { noteInput } = args;
    return await userModel.create(noteInput);
  } catch (error:any) {
    throw new Error(error);
  }
}

export async function updateNoteData(args:any): Promise<any> {
  try {
    const { id, noteInput } = args;
    const note = await userModel.findById(id);
    if (!note) {
      const error = new Error("No note found!");
      error.message = '404';
      throw error;
    }
    return await userModel.findByIdAndUpdate(id, noteInput, { new: true });
  } catch (error:any) {
    throw new Error(error);
  }
}

export async function deleteNoteData(args:any): Promise<any> {
  try {
    const { id } = args;
    const note = await userModel.findById(id);
    if (!note) {
      const error = new Error("No note found!");
      error.message = '404';
      throw error;
    }
    await userModel.findByIdAndDelete(id);
    return true;
  } catch (error:any) {
    throw new Error(error);
  }
}