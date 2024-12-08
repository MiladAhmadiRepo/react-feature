
type Props = {
    color?: string;
    children?: string;
    onClick: ()=>void;
};

export function BaseButton({color,children,onClick}: Props) {
    return (
        <button type="button" className={color } onClick={onClick}>{children}</button>
    );
};
export default BaseButton