// import { h } from "preact";
import { ActionIcon, Container, Group } from "@mantine/core"
import "./Footer.css"
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-preact"

const Footer: preact.FunctionalComponent = () => {

    return (
        <div className="footer">
      <Container size="xl" className="inner">
        <p>©2023 all rights reserved</p>
        <Group gap={20} className="links" justify="flex-end" >
          <ActionIcon style={{ borderRadius: "50%"}} size="lg" color="rgb(215, 143, 19)" variant="subtle">
            <IconBrandTwitter style={{ width: "20px" }} stroke="1.5" />
          </ActionIcon>
          <ActionIcon style={{ borderRadius: "50%"}} size="lg" color="rgb(215, 143, 19)" variant="subtle">
            <IconBrandYoutube style={{ width: "20px" }} stroke="1.5" />
          </ActionIcon>
          <ActionIcon style={{ borderRadius: "50%"}} size="lg" color="rgb(215, 143, 19)" variant="subtle">
            <IconBrandInstagram style={{ width: "20px" }} stroke="1.5" />
          </ActionIcon>
        </Group>
      </Container>
    </div>
    )
}

export default Footer