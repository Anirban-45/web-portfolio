// import { h } from "preact";
import { useState } from "preact/hooks";
import "./Header.css";

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'Features' }
]
const Header: preact.FunctionalComponent = () => {
    const [active, setActive] = useState(links[0].link);
    
    console.log(active);

    return (
        <header>
            <h3 onClick={() => setActive(links[1].link)}>Header</h3>
        </header>
    )
}

export default Header
