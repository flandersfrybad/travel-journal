import globePath from "https://github.com/flandersfrybad/travel-journal/blob/main/dist/images/globe.png?raw=true"

export default function Header() {
    return (
        <header>
            <img src={globePath} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    );
}
