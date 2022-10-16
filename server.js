import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import path from 'path';
import cors from 'cors';

/* Config */
import { connectDB } from './config/db.js';

/* Middleware */
import { errorMiddleware } from './middlewares/errorMiddleware.js';

/* Routes */
import casinoRoutes from './routes/casinoRoutes.js';

dotenv.config();
connectDB();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

process.env.PWD = process.cwd();

app.use(express.static(path.join(process.env.PWD, 'static')));
app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use('/api/casino', casinoRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});