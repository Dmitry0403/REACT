import "./styles.css"

export function Input(props){
    return <input className="input" onChange={props.onChange} onBlur={props.onBlur}/>
}