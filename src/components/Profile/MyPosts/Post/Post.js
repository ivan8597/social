import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/i?id=403846a78ecb5c34a968c480ba6a1d0b-4568431-images-thumbs&n=13'/>
      {props.message} 
      
      <span> {props.like}</span> 
    </div>


  )
}


export default Post
