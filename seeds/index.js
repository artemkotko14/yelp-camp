const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "65ce374f4f90ce4e59830e6c",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Located at 4 km from the village of SOSPEL, situated in a privileged natural surroundings, open from 15 April to 30 September.The camping welcomes you with there 90 pitches including 13 accommodation on a terrain of more than 3 hectares of land and terraces.",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },

      images: [
        {
          url: "https://res.cloudinary.com/dx4vd9gqj/image/upload/v1710163115/YelpCamp/bdp0ojr4bebnb0vltvlm.jpg",
          filename: "YelpCamp/bdp0ojr4bebnb0vltvlm",
        },
        {
          url: "https://res.cloudinary.com/dx4vd9gqj/image/upload/v1711316062/YelpCamp/x0fzhb0z3c9raywps1yk.jpg",
          filename: "YelpCamp/dpxfygmzxgfzbjspts5r",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
