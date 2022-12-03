import Button from "../../atoms/Button/Button";

// props jest to wbudowany obiekt w JS i sluzy do odbierania danych z komponentu, ktory go wywoluje (komponentu nadrzednego)
function ChatMessages(props) {
  return (
    <ul>
    {
      props.messagesFromApp.map(message => {
        return (
          <li key={message.id}>
            {message.message} - <strong>{message.author}</strong>
            {/* jezeli potrzebuje przekazac informacje typu ID do klikanego elementu, potrzebuje uzyc pustej funkcji strzalkowej przy definicji eventu i przekazac parametr do funkcji. */}
            {/* <button
              onClick={() => props.handleRemoveMessageFromApp(message.id)}
            >
              X
            </button> */}

            <Button
              handleClick={() => props.handleRemoveMessageFromApp(message.id)}
            >
              X
            </Button>
          </li>
        )
      })
    }
  </ul>
  )
}

export default ChatMessages;