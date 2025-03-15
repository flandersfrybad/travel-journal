import globe from '../images/globe.png';

export default function Header() {
    // Ensure that you use the correct path with VITE prefix
    const globePath = import.meta.env.VITE_PUBLIC_URL + '/images/globe.png';
    
    return (
        <header>
            <img src={globePath} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    );
}