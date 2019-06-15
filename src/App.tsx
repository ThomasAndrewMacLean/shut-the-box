import * as React from 'react';
import { render } from 'react-dom';

import Game from './Game';

render(<Game count={789} />, document.getElementById('main'));
