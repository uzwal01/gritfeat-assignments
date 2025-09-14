import mongoose from 'mongoose';

const rawPort = process.env.PORT;
const PORT = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8080;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', {
      dbName: 'blogDB',
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export { PORT };
export default connectDB;
