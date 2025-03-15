import globe from "https://github.com/flandersfrybad/travel-journal/blob/main/images/globe.png?raw=true"

export default function Header() {
    return (
        <header>
            <img src={globe} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}
