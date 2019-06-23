import * as React from 'react';
import { render } from 'react-dom';

import Game from './Game';
import Footer from './Footer';

render(
    <>
        <Game />
        <Footer />
    </>,
    document.getElementById('main'),
);
