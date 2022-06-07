const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const designs = require('./data/designs');
const User = require('./models/user-model');
const Design = require('./models/design-model');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Design.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleDesigns = designs.map((design) => {
      return { ...design, user: adminUser };
    });

    await Design.insertMany(sampleDesigns);

    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Design.deleteMany();

    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
