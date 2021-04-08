import React from 'react';
import {MESSAGES} from "../../const";

type StatusProps = {
    isSolved: boolean
}

const Status = ({isSolved}: StatusProps) => (
    <div
        className={`bubble-sort__status bubble-sort__status_solved_${isSolved.toString()}`}
        role="alert"
    >
        {isSolved ? MESSAGES.SOLVED : MESSAGES.NOT_SOLVED}
    </div>
);

export default Status;