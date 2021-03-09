import React, {createContext, useState, useEffect} from 'react';
import {FileHandlerNavigationI} from './FileHandlerInterface';

const { data } = require("../../data/data.js");

interface FilaHandlerContextI {
  stockData: FileHandlerNavigationI;
  setStockData: (stockData: FileHandlerNavigationI) => void;
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