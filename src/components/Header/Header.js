import "./styles.css"

export function Header(){
    return(
        <header className="header">
        <div className="logo">
          <a href="www.trello.com">
            <span className="ic-trello path1"></span>
            <span>Trello</span>
          </a>
        </div>
        <div className="icon-menu">menu</div>
      </header>
    )
}