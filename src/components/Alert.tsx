import {ReactNode} from "react";

interface Props{
    children: ReactNode,
    onClick?: () => void,
}
export function Alert({children,onClick}: Props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{children}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
        </div>
    );
};
export default Alert;