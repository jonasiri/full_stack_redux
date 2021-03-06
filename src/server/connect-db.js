import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI || `mongodb://localhost:27017/myorganizer`;
let db = null;

export async function connectDB() {
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.info("DB there: ", db);
  return db;
}
