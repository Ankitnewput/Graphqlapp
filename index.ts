import { isLocalhost } from './core/constant'

async function run(): Promise<void> {
  if (isLocalhost()) {
    const { config } = await import('dotenv')
    config()
  }
  await import('./server');
}

run().catch(console.error);
