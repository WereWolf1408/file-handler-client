import { useContext, useEffect} from "react";
import { FileHandlerContext } from '../components/Context/FileHandlerContext';

interface OptionsI {
  method: string;
}

interface sendFetchI {
  (
    url: string,
    options: OptionsI
  ): void
}

const sendFetch: sendFetchI = (url, options) => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);

  useEffect(() => {
    console.log('---> sendFEtch request Component was called !!!!!!!!!!!!!!!');
    fetch(url, {
      method: options.method || 'GET',
    })
    .then(rawData => rawData.json())
    .then((responce) => {
      console.log('////  responce from server');
      console.log(responce);
      setData(Object.assign({}, data, { firstRun: false }));
    })
  }, [data.firstRun]);

  return {

  };
}

export default sendFetch;