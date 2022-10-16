import mongoose from 'mongoose';

const casinoSchema = mongoose.Schema({
    name: {type: String, required: true}
});

const Casino = mongoose.model('Casino', casinoSchema);
export default Casino;