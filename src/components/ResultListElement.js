import React from 'react';

const ResultListElement = ({result}) => (
          <span>{result !== "Empty Set" ? result.toFixed(2) : result}</span>
);

export default ResultListElement;
