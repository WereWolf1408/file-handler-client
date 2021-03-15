import React, {createContext, useState, useEffect} from 'react';
import {FileHandlerNavigationI} from './FileHandlerInterface';
import sendFetch from "../../utils/FetchRequest";

const { data } = require("../../data/data.js");

const requestUrl = "http://localhost:9000/disk";
const requestOptions = {
  method: 'GET',
};

interface FilaHandlerContextI {
  stockData: FileHandlerNavigationI;
  setStockData: (stockData: FileHandlerNavigationI) => void;
}

const FileHandlerContext = createContext<FilaHandlerContextI>({stockData: data, setStockData: stockData => console.log('init value')});

const FileHandlerProvider = ({children}: any) => {
  sendFetch(requestUrl, requestOptions);

  const [stockData, setStockData] = useState(data)
  
  useEffect(() => {
    console.log('---> use effect methid inside FileHandlerContext Component');
    return function () {
      console.log('this is special function that is called after component unmout and before each reander cycle! need to remember');
    }
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