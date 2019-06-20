import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import socket from '../../socket'

// Action Types :-)
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER'
const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE'
const USER_SET = 'USER_SET'

// Action Creators =]
const gotMessagesFromServer = messages => ({
    type: GOT_MESSAGES_FROM_SERVER,
    messages,
})
export const gotNewMessage = message => ({
    type: GOT_NEW_MESSAGE,
    message,
})
//stretch: have this be the username they use when they log in
export const userSet = userName => ({
    type: USER_SET,
    payload: userName,
})

// Thunk Creator ;+}
export const fetchMessages = () => async dispatch => {
    const { data: messages } = await axios.get('/api/messages')
    dispatch(gotMessagesFromServer(messages))
    // .get('api/messages')
    // .then(res => res.data)
    // .then(this)
   
}
export const sendMessage = message => async (dispatch, getState) => {
    // console.log('STATE ', getState())
    message.name = getState().ChatStore.user
    // console.log(message);
    const { data: newMessage } = await axios.post('/api/messages', message)
    dispatch(gotNewMessage(newMessage))
    socket.emit('new-message', newMessage)

}

// Reducer :/
export const initialState = {
    messages: [],
    user: 'Jayson',
}


//delete before presentation:::
// // alternative pattern for writing reducer cases
// const mapTypeToCallback = {
//     [GOT_MESSAGES_FROM_SERVER]: (state, action) => ({
//         ...state,
//         messages: action.messages,
//     }),
// }

// :: (State, Action) -> State
export default (state = initialState, action) => {
    // return mapTypeToCallback[action.type](state, action)
    switch (action.type) {
        case GOT_MESSAGES_FROM_SERVER:
            return { ...state, messages: action.messages }
        case GOT_NEW_MESSAGE:
            return { ...state, messages: [...state.messages, action.message] }
        case USER_SET:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

// export default createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
// )
