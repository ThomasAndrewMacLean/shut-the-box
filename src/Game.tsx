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
    const [rollTotal, setRollTotal] = React.useState<number>(0);
    const [won, setWon] = React.useState<boolean>(true);

    const checkWin = (index): void => {
        const copyTiles = [...tiles];
        if (copyTiles[index] === false) {
            copyTiles[index] = true;
            if (copyTiles.filter((t): boolean => t === false).length === 0 && rollTotal - index - 1 === 0) {
                alert('You won ');
                setWon(true);
            }
        }
    };
    const flipTile = (index: number): void => {
        if (tiles[index]) return;
        if (rollTotal - index - 1 >= 0) {
            setRollTotal(rollTotal - index - 1);

            setTiles([...tiles.slice(0, index), true, ...tiles.slice(index + 1)]);
        }
        checkWin(index);
    };

    const restartGame = (): void => {
        setTiles(startTiles);
        setRollTotal(0);
    };
    return (
        <main className="container">
            <header>
                <h1>Shut-the-box.</h1>
                <button className="restart-btn" onClick={(): void => restartGame()}>
                    Restart
                </button>
            </header>

            <div className="numberTiles">
                {tiles.map(
                    (tile, index): JSX.Element => {
                        return (
                            <div
                                className={tile ? 'show numberTile' : 'hide numberTile'}
                                key={index}
                                onClick={(): void => flipTile(index)}
                            >
                                {index + 1}
                            </div>
                        );
                    },
                )}
            </div>

            <Die rollTotal={rollTotal} setRollTotal={setRollTotal} />
        </main>
    );
};

export default Count;

Count.propTypes = {
    // count: PropTypes.number.isRequired,
    // tiles: PropTypes.array.isRequired,
};
