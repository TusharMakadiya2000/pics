import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="border border-gray-500 rounded-md p-1.5">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label htmlFor="">Enter Search term</label>
                <input
                    onChange={handleChange}
                    value={term}
                    className="border border-gray-300"
                />
            </form>
        </div>
    );
}

export default SearchBar;
