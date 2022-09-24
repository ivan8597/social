import React from 'react'
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img}
          src='https://kartinkin.net/uploads/posts/2021-03/1616079772_41-p-ozera-krasivie-foto-48.jpg' />
      </div>
      <div className={s.descriptionBlock}> ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
