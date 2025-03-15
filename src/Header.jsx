import globePath from "dist/images/globe.png"

export default function Header() {
    return (
        <header>
            <img src={globePath} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    );
}
