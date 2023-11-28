import { connectMongo } from '@/lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
import { Parser } from '@json2csv/plainjs';

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const mongoUri = searchParams.get('mongoUri') || '';
  const query = searchParams.get('query') || '';

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
    if (!query.startsWith('db.collection')) {
      return NextResponse.json(
        {
          message:
            'query should start with "db.collection" example "db.collection("user").find()"',
        },
        { status: 500 },
      );
    }

    finalQuery = query.trim();
    const data = await eval(`${finalQuery}.toArray()`);
    const parser = new Parser({ header: true });
    const csvData = parser.parse(data);

    // Set response headers for file download
    const response = new NextResponse(csvData, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=users.csv',
      },
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: `some error occurred while executing`,
      },
      { status: 500 },
    );
  }
}
