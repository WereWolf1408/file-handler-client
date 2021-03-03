import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from '../App';
import TestAPIComponent from "../components/TestComponent";
import FileHandler from "../components/FileHandler/FileHandler";
import {FileHandlerProvider} from '../components/Context/FileHandlerContext';
// import reportWebVitals from '../reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TestAPIComponent/> */}
    
    <FileHandlerProvider>
      <FileHandler />
    </FileHandlerProvider>
   
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
