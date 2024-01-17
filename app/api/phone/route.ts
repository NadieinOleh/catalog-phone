import {NextResponse} from 'next/server';
import {NextApiRequest} from 'next';

import Phone from '../../../models/Phones';
import {connect} from '../../../libs/MongoConnect';

export const GET = async (req: NextApiRequest) => {
  try {
    await connect();

    const {searchParams} = new URL(req.url || '', `http://${req.headers.host}`);

    const id = searchParams.get('id') || '0';
    const phone = await Phone.findById(id);

    return new NextResponse(JSON.stringify(phone), {status: 200});
  } catch (error) {
    return new NextResponse('Error in fetching phone' + error, {status: 500});
  }
};
