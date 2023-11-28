import { connectMongo } from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { mongoUri } = await req.json();
  try {
    const clientPromise = connectMongo(mongoUri);
    const client = await clientPromise;
    const db = await client.db();
    const data = await db.listCollections().toArray();
    const collections = data.map((collection: any) => collection.name);
    return NextResponse.json({ data: collections });
  } catch (error) {
    return NextResponse.json(
      { data: 'connection to db failed' },
      { status: 500 },
    );
  }
}
