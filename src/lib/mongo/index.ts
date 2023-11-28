import { MongoClient, MongoClientOptions } from 'mongodb';

export const connectMongo = (URI: string) => {
  const options: MongoClientOptions = {};

  if (!URI) throw new Error('Please provide a mongo URI');

  let client = new MongoClient(URI, options);
  let clientPromise;

  if (process.env.NODE_ENV !== 'production') {
    if (!(global as any)._mongoClientPromise) {
      (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }

  return clientPromise;
};
