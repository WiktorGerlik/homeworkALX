// atomy powinny byc jak najbardziej reuzywalne tzn:
// - nazwy propsow nie powinny zdradzac tego, co bedzie sie dzialo
// - tekst czy tresc atomow, powinna byc zdefiniowana przez children
// - atomy powinny obslugiwac wszystkie przypadki uzycia

function Button(props) {
    return (
      <button
        type={props.type ? props.type : 'button'}
        onClick={props.handleClick}
      >
        {props.children}
      </button>
    )
  }
  
  export default Button;