import * as React from 'react';
import './footer.css';

const Footer: React.FunctionComponent<{}> = (): JSX.Element => {
    return (
        <footer>
            made with ❤️ by <a href="mailto:hello@thomasmaclean.be?subject=Hi">thomasmaclean</a> ©{' '}
            {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
