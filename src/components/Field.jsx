import React from 'react';
const cells = [...Array(121).keys()];

function Field() {
  return (
    <div className="field">
      {cells.map((cell) => (
        <div key={cell} className="cell"></div>
      ))}
    </div>
  );
}

export default Field;
