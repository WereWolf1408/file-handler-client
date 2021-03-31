import { useContext, useEffect} from "react";
import { FileHandlerContext } from '../components/Context/FileHandlerContext';
import { DiskListI } from '../components/Context/FileHandlerInterface';

interface OptionsI {
  method: string;
}

interface sendFetchI {
  (
    url: string,
    options: OptionsI,
    callback: (obj: DiskListI) => void
  ): void
}

const sendFetch: sendFetchI = (url, options, callback) => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);

  useEffect(() => {
    fetch(url, {
      method: options.method || 'GET',
    })
    .then(rawData => rawData.json())
    .then((responce) => {
      console.log(responce);
      callback({
        navigationItem: responce.disks,
        firstRun: false,
        success: true,
        navigationActiveIndex: -1
      });
    })
  }, [data.firstRun]);

  return {};
}

export default sendFetch;