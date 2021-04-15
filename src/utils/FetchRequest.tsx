import { useContext, useEffect} from "react";
import { FileHandlerContext } from '../components/Context/FileHandlerContext';
import { DiskListI } from '../components/Context/FileHandlerInterface';

interface OptionsI {
  method?: string;
}

interface sendFetchI {
  (
    url: string,
    options: OptionsI,
    callback: (obj: DiskListI) => void
  ): void
}

const sendFetch: sendFetchI = (url, options, callback) => {
  useEffect(() => {
    fetch(url, {
      method: options.method || 'GET',
    })
    .then(rawData => rawData.json())
    .then((responce) => {
      console.log(responce);
      callback(responce);
    })
  }, [url]);
}

export default sendFetch;