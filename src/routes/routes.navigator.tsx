import { Router } from 'preact-router';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const Routes: preact.FunctionalComponent = () => {

    return (
        <Router>
            <Home path="/" />
            <About path="/about" />
        </Router>
    ) 
}

export default Routes;