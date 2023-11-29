// import { h } from "preact";
import { useState } from "preact/hooks";
import Logo from "../../../assets/images/icons/Logo.svg";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Container, Group } from "@mantine/core";
import "./Header.css";

const links = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/projects", label: "Projects" },
    { link: "/contact", label: "Contact" },
];
const Header: preact.FunctionalComponent = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className="link"
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className="header">
            <Container size="xl" className="inner">
                <img src={Logo} className="logo" />
                <Group gap={5} visibleFrom="xs" className="links">
                    {items}
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="xs"
                    size="sm"
                />
            </Container>
        </header>
    );
};

export default Header;
