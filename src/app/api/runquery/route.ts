import { connectMongo } from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const {
    query,
    selected_db: { mongoUri },
  } = await req.json();
  try {
    if (!mongoUri) {
      return NextResponse.json(
        { message: 'no mongoUri found' },
        { status: 500 },
      );
    }

    let finalQuery = '';
    const clientPromise = connectMongo(mongoUri);
    const client = await clientPromise;
    const db = await client.db();

    //handling empty query case
    if (!query.trim()) {
      return NextResponse.json(
        { message: 'empty query cannot be executed' },
        { status: 500 },
      );
    }

    //handling ; ending case
    if (query.endsWith(';')) {
      return NextResponse.json(
        { message: 'query can not end with ";"' },
        { status: 500 },
      );
    }

    //handle starts with db.getCollection
    if (query.startsWith('db.getCollection')) {
      return NextResponse.json(
        {
          message:
            'query can not start with "db.getCollection" only "db.collection"',
        },
        { status: 500 },
      );
    }
    finalQuery = query.trim();
    const data = await eval(`${finalQuery}.toArray()`);
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      {
        message: `some error occurred while executing`,
      },
      { status: 500 },
    );
  }
}
