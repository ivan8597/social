
const UPDATEMESSAGE_BODY = 'UPDATEMESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const dialogReducer = (state, action) => {


  switch (action.type) {
    case UPDATEMESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({ id: 7, message: body })
      return state
    default:
      return state
  }

}
export   const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}
export  const updateMessageBodyCreator = (body) => {
  return {
    type: UPDATEMESSAGE_BODY, body: body
  }
}
export default dialogReducer
