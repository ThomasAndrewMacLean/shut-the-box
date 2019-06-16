import * as React from 'react';
import PropTypes from 'prop-types';
import './die.css';

const Die: React.FunctionComponent<{
    rollTotal: number;
    setRollTotal: (rollTotal: number) => void;
}> = (props): JSX.Element => {
    const getDiceRoll = (): number => {
        return Math.floor(Math.random() * 6) + 1;
    };
    const [die1, setDie1] = React.useState<number>(getDiceRoll());
    const [die2, setDie2] = React.useState<number>(getDiceRoll());

    const rollDice = (): void => {
        if (props.rollTotal === 0) {
            const die1 = getDiceRoll();
            const die2 = getDiceRoll();
            setDie1(die1);
            setDie2(die2);

            props.setRollTotal(die1 + die2);
        }
    };
    return (
        <>
            <h1>Dice</h1>
            <button className="die-btn" onClick={(): void => rollDice()}>Roll</button>
            <div className="die">{die1}</div>
            <div className="die">{die2}</div>
        </>
    );
};

export default Die;

Die.propTypes = {
    rollTotal: PropTypes.number,
    setRollTotal: PropTypes.func,
};
