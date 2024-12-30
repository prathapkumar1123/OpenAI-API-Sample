const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();

require('dotenv').config()

var corsOptions = {
  origin: [],
  credentials: true,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  const allowedOrigins = [];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE');
  next();
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// maintain user session
app.use(
  cookieSession({
    name: 'session',
    secret: 'secret_key',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  })
);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Testing Chat-GPT APIs' })
});

require('./app/routes/open_ai_routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});
