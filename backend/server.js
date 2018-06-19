import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets'
import UserSchema from './models/user'
import data from '../client/src/data'

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
 });

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World! Here is my Final Project' });
});

router.get('/user', (req, res) => {
  res.json({ data: data });
});

router.post('/user', (req, res) => {
  const user = new UserSchema();
  const { name, email, password } = req.body;
  user.name = name;
  user.email = email;
  user.password = password;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  })
})

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

/*
handleSubmit = () => {
  this.fetchURL('http://localhost:3001/api/user');
  console.log(this.erro);
  if (!this.erro) {
    this.props.onLoginClick(this.state.email, this.state.password);
  }
  this.props.history.push('/');
}

fetchURL = (url) => {
  // TODO SEARCH USER ON THE DATABASE
  fetch(url)
    .then(res => res.json())
    .then(res => res.data.find((ele) => {
      console.log('was the user founded?', ele.email === this.state.email && ele.password === this.state.password);
      this.setState({
        erro: ele.email === this.state.email && ele.password === this.state.password,
      });
      return ele.email === this.state.email && ele.password === this.state.password;
    })).catch((err) => {
      console.log('erro login', err);
    });
} */
