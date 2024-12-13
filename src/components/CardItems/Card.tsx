interface Props {
    cardItems: string[];
    onClear:()=>void
};

export function Card({cardItems,onClear}: Props) {
    return (
        <div>
            <ul>
                {cardItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={onClear}>Clear
            </button>
        </div>
    );
};