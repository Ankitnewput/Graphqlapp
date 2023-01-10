import {
    Prop,
    getModelForClass,
  } from '@typegoose/typegoose'

export class userDetailsSchema{
    @Prop()
    name?: string;
    @Prop()
    address?: string;
    @Prop()
    age?: number;
    @Prop()
    email?: string;
}

  export const userModel = getModelForClass(userDetailsSchema, {
    schemaOptions: {
    id: true,
    collection: 'userDetail',
    },
  })