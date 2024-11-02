import React from "react";
import MyPortfolio from "./MyPortfolio";

function PortfolioContainer({portfolioStocks, onDeletePortfolio}) {

  console.log(portfolioStocks)


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(portfolio =>
        <MyPortfolio key={portfolio.id} portfolio={portfolio} onDeletePortfolio={onDeletePortfolio}/>
      )}
      
    </div>
  );
}

export default PortfolioContainer;
