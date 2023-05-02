import React, {useState} from 'react';
import "./Grid.css";

const Grid = () => {
  const renderRow = (rowIndex) => {
    const buttons = [];
    for (let colIndex = 0; colIndex < 7; colIndex++) {
      const buttonNumber = rowIndex * 7 + colIndex + 1;
      if (colIndex != 6) {
        buttons.push(
            <>
              <button
                  key={colIndex}
                  className={`col node ${colIndex + 1}`}
              >
                  {buttonNumber}
              </button>
              <button/>
          </>
        );
      } else {
        buttons.push(
            <>
              <button
                  key={colIndex}
                  className={`col node ${colIndex + 1} item-2`}
              >
                  {buttonNumber}
              </button>
          </>
        );
      }
      
    }
    return buttons;
  };

  const renderGrid = () => {
    const rows = [];
    for (let rowIndex = 0; rowIndex < 14; rowIndex++) {
        if (rowIndex % 2 == 0 && rowIndex != 0) {
            rows.push(
                <div>
                    <button>BOEN</button>
                    <button>BOEN</button>
                    <button>BOEN</button>
                    <button>BOEN</button>
                    <button>BOEN</button>
                    <button>BOEN</button>
                    <button>BOEN</button>
                </div>
            );
        } else if (rowIndex == 0) {
            continue;
        } else {
            rows.push(
                <div key={rowIndex} className={`row ${rowIndex + 1}`}>
                    {renderRow(rowIndex)}
                </div>
            );
        }
    }
    return rows;
  };

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // Enter key was pressed.
      console.log(inputValue);
    }
  };

  return (
      <div>
        <input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
        <div className="grid-container">
            <div className="grid">
                {renderGrid()}
            </div>
        </div>
    </div>);
};

export default Grid;