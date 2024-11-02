import React from "react";

function Stock({stock, onAddPortfolio }) {

  function handleClick() {
    onAddPortfolio(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={handleClick}>{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
