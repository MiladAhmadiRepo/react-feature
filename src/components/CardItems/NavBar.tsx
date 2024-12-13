interface Props  {
    cardItemsCount :number
};
export const NavBar = ({cardItemsCount}: Props) => {
    return (
        <div>
            <p>{cardItemsCount}</p>
        </div>
    );
};