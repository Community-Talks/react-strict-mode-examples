import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <h1>Menu</h1>
            <ul>
                <li>
                    <Link to="/example">Ejemplo</Link>
                </li>
                <li>
                    <Link to="/impure-rendering">Renderizado impuro</Link>
                </li>
                <li>
                    <Link to="/effect-cleanup">Limpieza de Effects</Link>
                </li>
                <li>
                    <Link to="/deprecated-api">API Obsoleta</Link>
                </li>
            </ul>
        </>
    );
}