import React from "react";

const Pagination = ({ setGetLimit, getLimit }) => {
  return (
    <div className="pagination">
      <div className={`Pagination--item ${getLimit == 5 ? "active" : ""}`} onClick={(e) => setGetLimit(Number(e.target.textContent))}>
        5
      </div>
      <div className={`Pagination--item ${getLimit == 10 ? "active" : ""}`} onClick={(e) => setGetLimit(Number(e.target.textContent))}>
        10
      </div>
      <div className={`Pagination--item ${getLimit == 15 ? "active" : ""}`} onClick={(e) => setGetLimit(Number(e.target.textContent))}>
        15
      </div>
      <div className={`Pagination--item ${getLimit == 20 ? "active" : ""}`} onClick={(e) => setGetLimit(Number(e.target.textContent))}>
        20
      </div>
    </div>
  );
};

export default Pagination;
