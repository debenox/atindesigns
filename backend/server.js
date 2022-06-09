const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/error-middleware');

const designRoutes = require('./routes/design-routes');
const userRoutes = require('./routes/user-routes');

const app = express();

app.use(express.json());

dotenv.config();

connectDB();

app.use('/api/designs', designRoutes);
app.use('/api/users', userRoutes);

app.use(errorMiddleware.notFound);

app.use(errorMiddleware.errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}...`));
