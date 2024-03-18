import { useEffect } from "react";

export function Example() {
    useEffect(() => {
        console.log('Este mensaje se imprime dos veces en consola.');
    }, []);

    return <h1>Revisa la consola</h1>;
}