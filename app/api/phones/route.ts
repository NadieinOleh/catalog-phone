import {NextResponse} from 'next/server';

import {NextApiRequest} from 'next';

import Phone from '../../../models/Phones';
import {connect} from '../../../libs/MongoConnect';

export const GET = async (req: NextApiRequest) => {
  try {
    await connect();

    const {searchParams} = new URL(req.url || '', `http://${req.headers.host}`);
    const limit = parseInt(searchParams.get('limit') || '30') || 30;
    const sort = searchParams.get('sort') || '';

    if (isNaN(limit)) {
      throw new Error('Invalid limit parameter');
    }

    const param = sort === 'increase' ? 1 : -1;

    const phones = await Phone.find().sort({price: param}).limit(limit);

    return new NextResponse(JSON.stringify(phones), {status: 200});
  } catch (error) {
    return new NextResponse(`Error in fetching phones: ${error}`, {status: 500});
  }
};