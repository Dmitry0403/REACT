import "./styles.css"

export function Header(props){
    return(
        <header className="header">
        <div className="logo">
          <a href="www.trello.com">
            <span className="ic-trello path1"></span>
            <span>Trello</span>
          </a>
        </div>
        <div className="icon-menu" onClick={props.onClick}>menu</div>
      </header>
    )
}