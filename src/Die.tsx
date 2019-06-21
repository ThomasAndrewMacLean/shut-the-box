import * as React from 'react';
import PropTypes from 'prop-types';
import './die.css';
import useDeviceOrientation from '@rehooks/device-orientation';

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

    React.useEffect((): void => {
        console.log('UseEffect');
        let value = useDeviceOrientation();
        document.getElementById('debug').innerHTML = value.beta.toString();
    }, []);

    const getDieEmoji = (rolledNumber: number): string => {
        switch (rolledNumber) {
            case 1:
                return '⚀';
            case 2:
                return '⚁';
            case 3:
                return '⚂';
            case 4:
                return '⚃';
            case 5:
                return '⚄';
            case 6:
                return '⚅';
            default:
                return '';
        }
    };

    return (
        <div className="die-wrapper">
            <span id="debug"></span>
            {props.rollTotal === 0 ? (
                <button className="die-btn" onClick={(): void => rollDice()}>
                    Roll
                </button>
            ) : (
                <>
                    <div className="die">{getDieEmoji(die1)}</div>
                    <div className="die">{getDieEmoji(die2)}</div>
                </>
            )}
        </div>
    );
};

export default Die;

Die.propTypes = {
    rollTotal: PropTypes.number,
    setRollTotal: PropTypes.func,
};
