import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search order" value={query} onChange={ e => setQuery(e.target.value) }/>
        </form>
    );
}