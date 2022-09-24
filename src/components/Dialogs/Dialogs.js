import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from "./Dialogs.module.css"
import Message from './Message/Message'
import { updateMessageBodyCreator, sendMessageCreator } from '../../redux/dialogReducer'


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage

  let dialogItems = state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />
  ))

  let messageItems = state.messages.map(m => (<Message message={m.message} />
  ))

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())

  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateMessageBodyCreator(body))
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>

        {dialogItems}

      </div>
      <div className={s.messages}>
        <div>{messageItems}</div>
        <div>

          <div><textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Enter your message'>
          </textarea></div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dialogs
