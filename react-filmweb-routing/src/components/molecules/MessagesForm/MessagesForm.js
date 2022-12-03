import Button from "../../atoms/Button/Button";

function MessagesForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Author
        <input
          type="text"
          placeholder="Wpisz autora"
          value={props.authorInputValue}
          onChange={props.handleAuthorInputChange}
        />
      </label>
      <label>
        Message
        <input
          type="text"
          placeholder="Wpisz wiadomość"
          value={props.messageInputValue}
          onChange={props.handleMessageInputValue}
        />
      </label>
      {/* <button type="submit">Send</button> */}
      <Button type="submit">
        Send
      </Button>
    </form>
  )
}

export default MessagesForm;