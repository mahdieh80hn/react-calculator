import Button from "../Button";

export default function ButtonsPanel({ handleClick }) {
    const buttons = [
        "C", "+/-", "/", "*",
        "7", "8", "9", "Del",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "%", "0",".",  "=",
    ];
    return (
        <div className="grid grid-cols-4 gap-3">
            {buttons.map((title, index) => (
                <Button
                    key={index}
                    title={title}
                    onClick={() => handleClick(title)} />
            ))}
        </div>
    )
}