import { MongoClient, MongoClientOptions } from 'mongodb';

const URI =
  'mongodb://ulivingstaging:y62HSFVblWV6FO52@cluster0-shard-00-00.c5uv6.mongodb.net:27017,cluster0-shard-00-01.c5uv6.mongodb.net:27017,cluster0-shard-00-02.c5uv6.mongodb.net:27017/uniliving?ssl=true&replicaSet=atlas-zlxncs-shard-0&authSource=admin&retryWrites=true&w=majority';

// const options: MongoClientOptions = {};

// if (!URI) throw new Error('Please provide a mongo URI');

// let client = new MongoClient(URI, options);
// let clientPromise;

// if (process.env.NODE_ENV !== 'production') {
//   if (!(global as any)._mongoClientPromise) {
//     (global as any)._mongoClientPromise = client.connect();
//   }
//   clientPromise = (global as any)._mongoClientPromise;
// } else {
//   clientPromise = client.connect();
// }

// export default clientPromise;

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
