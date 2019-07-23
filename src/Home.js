import React from 'react'
import {Container,} from 'semantic-ui-react'
import MapComponent from "./components/MapComponent";
import MenuBarComponent from "./components/MenuBarComponent";

const Home = () => (
    <Container
        style={{ height: window.innerHeight, width: window.innerWidth }}>
        <MenuBarComponent>
        </MenuBarComponent>
        <MapComponent>
        </MapComponent>
    </Container>
);

export default Home