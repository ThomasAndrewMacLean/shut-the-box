import * as React from 'react';
// import PropTypes from 'prop-types';
import Die from './Die';

import './styles.css';

const Count: React.FunctionComponent<{
    //count: number;
    //tiles: boolean[];
}> = (props): JSX.Element => {
    const startTiles: boolean[] = [false, false, false, false, false, false, false, false, false];
    const [tiles, setTiles] = React.useState(startTiles);
    const [rollTotal, setRollTotal] = React.useState(0);

    const flipTile = (index: number): void => {
        if (rollTotal - index - 1 >= 0) {
            setRollTotal(rollTotal - index - 1);

            setTiles([...tiles.slice(0, index), true, ...tiles.slice(index + 1)]);
        }
    };

    const restartGame = (): void => {
        setTiles(startTiles);
        setRollTotal(0);
    };
    return (
        <main className="container">
            {/* <h1>{props.count}</h1> */}
            <div className="numberTiles">
                {tiles.map(
                    (tile, index): JSX.Element => {
                        console.log(tile);
                        return (
                            <div
                                className={tile ? 'show numberTile' : 'hide numberTile'}
                                key={index}
                                onClick={(): void => flipTile(index)}
                            >
                                {tile ? 'true' : 'false'} {index + 1}
                            </div>
                        );
                    },
                )}
            </div>

            <Die rollTotal={rollTotal} setRollTotal={setRollTotal} />
            {/* <button onClick={(): void => restartGame()}>Restart</button> */}
        </main>
    );
};

export default Count;

Count.propTypes = {
    // count: PropTypes.number.isRequired,
    // tiles: PropTypes.array.isRequired,
};
