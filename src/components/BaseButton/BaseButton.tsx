import  styles from './BaseButton.module.css'
type Props = {
    color?: string;
    children?: string;
    onClick: ()=>void;
};

export function BaseButton({color,children,onClick}: Props) {
    return (
        <button type="button" className={[styles.btn , styles['btn-'+color]].join(' ')} onClick={onClick}>{children}</button>
    );
};
export default BaseButton