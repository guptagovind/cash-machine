import React from 'react';
import uuid from "uuid";

import ResultListElement from './ResultListElement';

const ResultsList = ({results}) => (
  <div className="list">
    {
      (!Array.isArray(results))
        ?
        (
          <span>
                 Result: {results}
          </span>
        )
        :
        (
          <div>Result: [
            {
              results.map((result, index) => (
                <span key={uuid()}>
                      <ResultListElement result={result}/>
                  {results.length - 1 !== index && <span>, </span>}
                </span>
              ))
            }
            ]
          </div>
        )
    }
  </div>
);

export default ResultsList;
