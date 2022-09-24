
const ADD_POST = 'ADD-POST'
const UPDATEPOST_TEXT = 'UPDATEPOST-TEXT'
const profileReducer = (state, action) => {

  switch(action.type){
    case ADD_POST:
      let newPost = {
        id: 0,
        message: state.newPostText,
        like: 19
      };
      state.posts.push(newPost)
      state.newPostText = ''
      return state

      case UPDATEPOST_TEXT:
        state.newPostText = action.newText;
         return state

        default:
          return state
  }
  
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
 export const onChangePostTextActionCreator = (text) => {
  return {
    type: UPDATEPOST_TEXT, newText: text
  }
}
export default profileReducer
