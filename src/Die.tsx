import * as React from 'react';

const Count: React.FunctionComponent<{
    //count: number;
}> = (): JSX.Element => {
    const [die1, setDie1] = React.useState<number>(0);
    const [die2, setDie2] = React.useState<number>(0);
    const getDiceRoll = (): number => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const rollDice = (): void => {
        setDie1(getDiceRoll());
        setDie2(getDiceRoll());
    };
    return (
        <>
            <h1>Dice</h1>
            <button onClick={(): void => rollDice()}>Roll</button>
            <span>{die1}</span>
            <span>{die2}</span>
        </>
    );
};

export default Count;
