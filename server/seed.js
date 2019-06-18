const db = require('./db');
const Author = require('./db/models/author');
const Message = require('./db/models/message');
const Channel = require('./db/models/channel');

const channels = [
  { name: 'really_random' }
  { name: 'generally_speaking' },
  { name: 'dogs_of_fullstack' },
  { name: 'lunch_planning' }
];

const authors = [{
  name: 'Cody',
  image: '/images/cody.jpg'
}, {
  name: 'Ben',
  image: '/images/ben.jpg'
}, {
  name: 'Star',
  image: '/images/star.jpg'
}, {
  name: 'Batman',
  image: '/images/batman.jpg'
}, {
  name: 'Elliott',
  image: '/images/elliott.jpg'
}, {
  name: 'Fira',
  image: '/images/fira.jpg'
}, {
  name: 'Henry',
  image: '/images/henry.jpg'
}, {
  name: 'Marcy',
  image: '/images/marcy.jpg'
}, {
  name: 'Milton',
  image: '/images/milton.jpg'
}, {
  name: 'Murphy',
  image: '/images/murphy.jpg'
}, {
  name: 'Raffi',
  image: '/images/raffi.jpg'
}, {
  name: 'Tulsi',
  image: '/images/tulsi.jpg'
}, {
  name: 'Pork Chop',
  image: '/images/pork_chop.jpg'
}, {
  name: 'Ribs',
  image: '/images/ribs.jpg'
}, {
  name: 'Stacey',
  image: '/images/stacey.jpg'
}, {
  name: 'JD',
  image: '/images/jd.jpg'
}, {
  name: 'BenBen',
  image: '/images/benben.png'
}, {
  name: 'Odie',
  image: '/images/odie.jpg'
}];

const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

//display random messages from a random person to start
const messages = [
  { authorId: id(), content: 'I like React!', channelId: 1 },
  { authorId: id(), content: 'I like Redux!', channelId: 1 },
  { authorId: id(), content: 'I like React-Redux!', channelId: 1 },
  { authorId: id(), content: 'I like writing web apps!', channelId: 1 },
  { authorId: id(), content: 'You should learn JavaScript!', channelId: 1 },
  { authorId: id(), content: 'JavaScript is pretty great!', channelId: 1 },
  { authorId: id(), content: 'Dogs are great!', channelId: 1 },
  { authorId: id(), content: 'Cats are also great!', channelId: 1 },
  { authorId: id(), content: 'Why must we fight so?', channelId: 1 },
  { authorId: id(), content: 'I want to get tacos!', channelId: 1 },
  { authorId: id(), content: 'I want to get salad!', channelId: 1 },
  { authorId: id(), content: 'I want a taco salad!', channelId: 1 }
];

const seed = () => 
  Promise.all(authors.map(author =>
    Author.create(author))
  )
  .then(() =>
  Promise.all(channels.map(channel =>
    Channel.create(channel))
  ))
  .then(() =>
  Promise.all(messages.map(message =>
    Message.create(message))
  )
 ).then(()=> console.log('Completed seeding'))
 .catch(err => console.error(err));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .then(() => {
      db.close();
      process.exit(0);
      return null;
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    });
};

main();
