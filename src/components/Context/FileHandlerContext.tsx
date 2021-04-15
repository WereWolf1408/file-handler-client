import React, {createContext, useState, useEffect, useContext} from 'react';
import {DiskListI} from './FileHandlerInterface'
import sendFetch from "../../utils/FetchRequest";

const { data } = require("../../data/data.js");

const requestUrl = "http://localhost:9000/disk";
const requestOptions = {
  method: 'GET',
};

interface FilaHandlerContextI {
  stockData: DiskListI;
  setStockData: (stockData: DiskListI) => void;
}

const FileHandlerContext = createContext<FilaHandlerContextI>({stockData: data, setStockData: stockData => console.log('init value')});

const FileHandlerProvider = ({children}: any) => {
  const [stockData, setStockData] = useState({} as DiskListI);

  const fetchCallback = ({ disks, success }: any) => {
    setStockData({
      navigationItem: disks,
      firstRun: false,
      success,
      navigationActiveIndex: -1,
    });
  };

  sendFetch(requestUrl, requestOptions, fetchCallback);

  useEffect(() => {
    console.log('---> use effect method inside FileHandlerContext Component');
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