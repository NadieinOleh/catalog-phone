import mongoose from 'mongoose';

const PhonesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sale: {
      type: Number,
      require: false,
    },
    isSale: {
      type: Boolean,
      require: false,
    },
    screen: {
      type: String,
      require: true,
    },
    capacity: {
      type: String,
      require: true,
    },
    ram: {
      type: String,
      require: true,
    },
  },
  {timestamps: true},
);

export default mongoose.models.Phones || mongoose.model('Phones', PhonesSchema);
