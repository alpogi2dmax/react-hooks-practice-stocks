import React from "react";

function MyPortfolio({portfolio, onDeletePortfolio}) {

  function handleClick() {
    onDeletePortfolio(portfolio)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={handleClick}>{portfolio.name}</h5>
          <p className="card-text">{portfolio.ticker}: {portfolio.price}</p>
        </div>
      </div>
    </div>
  );
}
export default MyPortfolio;