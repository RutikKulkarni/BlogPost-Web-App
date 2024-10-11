import express from 'express';
import { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import blogRoutes from './routes/blog.routes';
import config from './config/config';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err: Error) => console.log(err));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
