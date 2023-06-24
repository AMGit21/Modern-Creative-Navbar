import { stylePage, footer, mailLinkStyle } from './stylePage.js';

const SignUp = () => {

    return (
        <div style={stylePage}>
            <h1>Sign up Page</h1>
            <div style={footer}>
                <p>Copyright © 2023 - <a style={mailLinkStyle} href="mailto:alimantache1994@gmail.com">Ali Mantache</a> </p>
            </div>
        </div>
    );
};

export default SignUp;