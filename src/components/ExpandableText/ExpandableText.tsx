import {useState} from "react";

interface Props {
    children: string;
    maxChars?: number;
}

export function ExpandableText({children, maxChars = 100}: Props) {
    const [ isExpanded, setIsExpanded] = useState(false)
    const text= isExpanded ?children : children.substring(0, maxChars);
    return <p>{text}...<button onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded?'Less':'More'}</button></p>
}