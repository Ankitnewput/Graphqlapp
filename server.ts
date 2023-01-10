import { apolloServer } from './initGraphQLServer'
import express from 'express';
import { config } from './utils/config';
import * as mongo from './utils/mongo';

class Application {
    private app: any; 
    constructor() {
        this.app = express()
      }    
private async connectMongoDB() {
    await mongo.connect();
  }

  public async listen(port: number): Promise<any> {
    try {
      await apolloServer.start();

      await apolloServer.applyMiddleware({ app: this.app, path: '/app' })

      const server = await this.app.listen(port, () => {
        console.log(`Application listening on port: ${port}`);
      });
      
    //   await this.appendRoutes();

      await this.connectMongoDB();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

export const application = new Application();
Object.freeze(application);


(async function () {
  const PORT: number = parseInt(config.env.PORT.toString(), 10);
  try {
    await application.listen(PORT);
  } catch (error) {
    console.log(error);
  }
})();