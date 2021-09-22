import "./styles.css"
import { Card } from "../Card"

export function Main(){
    return(
        <main className="main wrapper">
        <div className="container-global">
          <div className="container-cards">
              <Card title="todo"/>
              <Card title="in-progress"/>
              <Card title="done"/>
          </div>
        </div>
      </main>
    )
}