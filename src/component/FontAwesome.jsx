
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FontAwesome({style, ...props}){
    return <FontAwesomeIcon onClick={props.onClick} icon={props.icon} size="2x" style={{ marginLeft: "10px", style }} {...props}/>
}