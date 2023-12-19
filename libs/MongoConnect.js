import mongoose from 'mongoose';

export const connect= async () => {
 try {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log('Mongo connection successful');
 } catch (err) {
  throw new Error('Error in connecting to mongo')
 }
}

export default connect