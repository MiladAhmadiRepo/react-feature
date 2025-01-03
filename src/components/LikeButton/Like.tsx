import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

type Props = {
    onClick: () => void;
};

const Like = ({onClick}: Props) => {

    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    if (status) return <AiFillHeart color='#ff6b81' size={20} onClick={toggle}/>
    return <AiOutlineHeart size={20} onClick={toggle}/>

};
export default Like;