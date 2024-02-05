import "../styles/Search.css";

export const Search = ({
    placeHolder,
    value,
    onFocus,
    onChange,
    onKeyDown,
}) => {
    return (
        <input
            id="search"
            type="text"
            placeholder={placeHolder}
            value={value}
            onFocus={onFocus}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
