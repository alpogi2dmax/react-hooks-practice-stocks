import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [ stocks, setStocks ] = useState([])
  const [ portfolioStocks, setPortfolioStocks ] = useState([])
  const [ sort, setSort ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(data => setStocks(data))
  },[])

  function addPortfolio(addStock) { 
    setPortfolioStocks([...portfolioStocks, addStock])
  }

  function deletePortfolio(deleteStock) {
    setPortfolioStocks(portfolioStocks.filter(portfolio => portfolio.name !== deleteStock.name))
  }

  function sortStock(sortCheck) {
    setSort(sortCheck)
  }

  function filterStock(filterType) {
    setFilter(filterType)
  }

  console.log(filter)

  const uniquePortfolio = portfolioStocks.filter((portfolio, index, self) => {
    return self.indexOf(portfolio) === index;
  });

  const sortStocks = stocks.filter(stock => filter === "" ? true : stock.type === filter)
    .sort((a, b) => {
    if (sort === "") {
      return true
    } else if (sort === 'alphabet') {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
    } else if (sort === 'price') {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    }
  })

  return (
    <div>
      <SearchBar onSortStock={sortStock} onFilterStock={filterStock} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortStocks} onAddPortfolio={addPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={uniquePortfolio} onDeletePortfolio={deletePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
