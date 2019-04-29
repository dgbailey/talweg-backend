const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    res.status(200).json({
      test: "hello dustin",shoutouts});
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

server.get('/users/:id', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    res.status(200).json({
      username: "dustin",quickbook_subs:[{id:'',sub_details:[{password:'',username:'',expiration:''}]}],network_subs:[{name:'hulu',sub_details:{password:'',username:''}}]});
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});


server.post('/', async (req, res) => {
  try {
    const [id] = await db('shoutouts').insert(req.body);
    const shoutouts = await db('shoutouts');

    res.status(201).json(shoutouts);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shoutout' });
  }
});


server.post('/users', async (req, res) => {
  try {
    const [id] = await db('shoutouts').insert(req.body);

    //body
    // {username:'',password:'',quickbook_subs:[{id:'',sub_details:[{password:'',username:'',expiration:''}]}],
    // 

    const shoutouts = await db('shoutouts');

    res.status(201).json(shoutouts);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shoutout' });
  }
});
