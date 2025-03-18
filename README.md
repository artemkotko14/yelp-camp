# YelpCamp

YelpCamp is a full-stack web application that allows users to browse, create, and review campgrounds. The project was developed as part of the **Web Developer Bootcamp** by **Colt Steele** on **Udemy**.

## Features

- User authentication (register, login, logout)
- Create, edit, and delete campgrounds
- Add and manage reviews for campgrounds
- Image upload for campgrounds
- Interactive map integration
- Responsive design

## Links

- Solution URL: [Github](https://github.com/artemkotko14/yelp-camp)
- Live Site URL: [Webpage](https://yelp-camp-dgrl.onrender.com/)

## Technologies Used

- **Frontend:** Bootstrap, EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Passport.js
- **Hosting:** Cloudinary (for images), Mapbox (for maps), Heroku

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/artemkotko14/yelp-camp.git
   cd yelp-camp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=<your_mongo_db_url>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
   CLOUDINARY_KEY=<your_cloudinary_key>
   CLOUDINARY_SECRET=<your_cloudinary_secret>
   MAPBOX_TOKEN=<your_mapbox_token>
   ```

4. **Run the application:**
   ```sh
   node app.js
   ```

5. **Open in the browser:**  
   Visit `http://localhost:3000`

## Future Improvements

- Improve site performance and load time
- Implement additional security measures
- Add more filtering and sorting features for campgrounds
- Optimize image handling and caching

## Author

- Github - [Artem Kotko](https://github.com/artemkotko14)

## Credits

This project was built as part of the **Web Developer Bootcamp** by **Colt Steele** on **Udemy**.


