import { AnyParamConstructor, ReturnModelType } from '@typegoose/typegoose/lib/types';
import mongoose from 'mongoose';
import { config } from './config';


const {
    mongoUser,
    mongoPassword,
    mongoUri,
    mongoDatabase,
  } = config.env.mongodb;
  
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    authSource: 'admin',
    user: mongoUser,
    pass: mongoPassword,
  }

  let dbInstance: typeof mongoose
  
  export const dbInstances: Map<string, typeof mongoose> = new Map();


  export async function connect(): Promise<typeof mongoose> {
    if (dbInstance) {
      return dbInstance
    }

    console.log('------>', mongoUri);
    if (!mongoUri || !mongoDatabase) {
      throw new Error('missing db config')
    }
  
    const URI = `${mongoUri}/${mongoDatabase}`
    console.log(`connecting to: ${URI}`)
    dbInstance = await mongoose.connect(URI,options)
    console.log('mongodb is connected')
    console.log('mongodb is connected');
  
    mongoose.connection.on('error', (err) => {
      console.log('mongodb has connection error:', err)
    })
    mongoose.connection.on('connected', () => {
      console.log('mongodb is connected')
    })
    mongoose.connection.on('disconnected', (err) => {
      console.log('mongodb is disconnected !!, error:', err)
    })
  
    const server = mongoUri.replace('mongodb+srv://', '');
    dbInstances.set(server, dbInstance)
    return dbInstance
  }