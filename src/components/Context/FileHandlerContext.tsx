import React, {createContext, useState, useEffect} from 'react';

const { data } = require("../../data/data.js");

interface NavigationItemI {
  label: string;
  selected: number;
  index: string;
}

interface CardsItemI {
  [key: string]: Array<{ label: string }>;
}

interface FileHandlerStateI {
  navigation: Array<NavigationItemI>;
  activeIndex: string;
  cards: CardsItemI;
}

interface FilaHandlerContextI {
  stockData: FileHandlerStateI;
  setStockData: (stockData: FileHandlerStateI) => void;
}

const FileHandlerContext = createContext<FilaHandlerContextI>({stockData: data, setStockData: stockData => console.log('init value')});

const FileHandlerProvider = ({children}: any) => {
  const [stockData, setStockData] = useState(data)

  useEffect(() => {
    console.log('use effect function inside DileHandlerProvider Component');
    console.log('---->');
    console.log(stockData);
  })

  return (
    <FileHandlerContext.Provider value={{stockData, setStockData}}>
      {children}
    </FileHandlerContext.Provider>
  )
}

export {
  FileHandlerContext,
  FileHandlerProvider,
}