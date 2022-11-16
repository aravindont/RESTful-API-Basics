const mongoose=require('mongoose');
const MONGODB_URL=process.env.MONGODB_URL;
async function main(){
    await mongoose.connect(MONGODB_URL);
}
module.exports=main;