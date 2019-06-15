import * as React from 'react';
import { render } from 'react-dom';

import Game from './Game';
import Die from './Die';

render(
    <>
        <Game count={789} />
        <Die />
    </>,
    document.getElementById('main'),
);
