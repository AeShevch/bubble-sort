import React from "react";
import "./controls.scss";

type ControlsProps = {
  startSorting: () => void;
  reset: () => void;
};

const Controls = ({ startSorting, reset }: ControlsProps) => {
  /**
   * Handlers
   */
  const onStartClick = (): void => {
    startSorting();
  };

  const onResetClick = (): void => {
    reset();
  };
  return (
    <div className="bubble-sort__controls controls">
      <button
        className="controls__button"
        aria-label="Stop sorting and set new numbers"
        onClick={onResetClick}
        type="button"
      >
        Reset
      </button>
      <button
        className="controls__button"
        aria-label="Start sorting"
        onClick={onStartClick}
        type="button"
      >
        Start sorting
      </button>
    </div>
  );
};

export default Controls;
