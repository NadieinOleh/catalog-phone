import {NextResponse} from 'next/server';

import Phone from '../../../models/Phones';
import {connect} from '../../../libs/MongoConnect';

export const GET = async () => {
  try {
    await connect();

    const phonesWithSalePromise = Phone.find({isSale: true}).limit(4);
    const phonesWithoutSalePromise = Phone.find({isSale: false}).limit(4);
    const lengthPhonesPromise = Phone.find();

    const [phonesWithSale, phonesWithoutSale, lengthPhones] = await Promise.all([
      phonesWithSalePromise,
      phonesWithoutSalePromise,
      lengthPhonesPromise,
    ]);

    const responseData = {
      phonesWithSale,
      phonesWithoutSale,
      lengthPhones,
    };

    return new NextResponse(JSON.stringify(responseData), {status: 200});
  } catch (error) {
    return new NextResponse('Error in fetching phones' + error, {status: 500});
  }
};
