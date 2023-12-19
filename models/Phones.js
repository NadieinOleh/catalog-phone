import mongoose from 'mongoose';

const PhonesSchema = new mongoose.Schema({
  phone: {
    type: String,
    require: true,
  },
}, {timestamps: true})



export default mongoose.models.Phones || mongoose.model("Phones", PhonesSchema)