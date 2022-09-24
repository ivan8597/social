import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Post/Post'
import {addPostActionCreator,onChangePostTextActionCreator} from '../../../redux/profileReducer'


const MyPosts = (props) => {
  
 let post = props.posts.map(p => (<Post message={p.message} like={p.like} />
  ))
  
  let newRefPost = React.createRef()
  const addPost = () => {
    // props.addPost()
    props.dispatch(addPostActionCreator())
  }
  const onChangePostText = () => {
    let text = newRefPost.current.value
    // props.upDatePostText(text)
    // let action={onChangePostTextActionCreator, newText:text}
    props.dispatch(onChangePostTextActionCreator(text))
  }
  return (
    <div className={s.postBlock}>
      <h4>My posts</h4>
      <div>
        <div><textarea 
          ref={newRefPost}
          onChange={onChangePostText}
          value={props.newPostText} /></div>

        <div><button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {post}


      </div>
    </div>

  )
}

export default MyPosts
