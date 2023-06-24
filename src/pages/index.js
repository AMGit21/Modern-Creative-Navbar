import { stylePage, footer } from './stylePage.js';

const Home = () => {

    return (
        <div style={stylePage}>
            <h1>Home Page</h1>
            <div style={footer}>
                <p>Copyright © 2023 - Ali Mantache </p>
            </div>
        </div>
    );
};

export default Home;