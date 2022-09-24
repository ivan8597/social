
import  profileReducer  from './profileReducer'
import dialogReducer from './dialogReducer'
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'sage', like: '9' },
        { id: 2, message: 'essage', like: '99' }
      ],
      newPostText: 'it-kamasutra',
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: "Dymich" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Alexander" }
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are your it-kamasutra?" },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' }
      ],
      newMessageBody: ''
    }
  },

  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage= profileReducer( this._state.profilePage,action)
    this._state.dialogPage= dialogReducer( this._state.dialogPage,action)
    this._callSubscriber(this._state)
  }
}

export default store

