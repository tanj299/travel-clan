//import sockets
import io from 'socket.io-client';
//import store
import store, { gotNewMessage  } from './store/utilities/ChatStore'
//import store,{gotMessagesFromServer} from './store/utilities/ChatStore'

//can be either option but this sets up the socket to the local build
const socket = io(window.location.origin);
// const socket = io('http://localhost');

//helpful connect messages
socket.on('connect', () => {
  console.log('I am now connected to the server!');
});

//when there is a new message, dispatch it to the store
socket.on('new-message', (message) => {
  store.dispatch(gotNewMessage(message))
  // store.dispatch(gotMessagesFromServer(message))
  console.log("testing", message)
})
// socket.on('testing', (message) =>  {
//   store.dispatch(gotMessagesFromServer(message))
// })

export default socket;
