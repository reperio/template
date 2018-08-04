import * as React from "react"

interface ButtonProps {
    name: string,
    color?: string,
    onClick?(event: any): void,
    text: string
}

const Button:React.SFC<ButtonProps> = props => {
    if (!props.color)
        props.color = 'netural';
    
    return <button name={props.name} className={`r-form-control r-btn r-${props.color}`} onClick={props.onClick}>{props.text}</button>;
}

export default Button;