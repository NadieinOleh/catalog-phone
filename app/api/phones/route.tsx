import {NextRequest, NextResponse} from 'next/server';
import mongoose from 'mongoose';

import Phone from '../../../models/Phones';
import connect from '../../../libs/MongoConnect';

export const GET = async () => {
  try {
    await connect();
    const phones = await Phone.find();

    return new NextResponse(JSON.stringify(phones), {status: 200});
  } catch (error) {
    return new NextResponse('Error in fetching phones' + error, {status: 500});
  }
};
