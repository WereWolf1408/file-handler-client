import React, {Component, useContext, SyntheticEvent, FunctionComponent as FC, useEffect, useState} from 'react';
import {Container} from '../Common/Container/Container';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation';
import {CustomCard} from '../Common/Card/CustomCard';
import {FileHandlerContext} from '../Context/FileHandlerContext';
import sendFetch from "../../utils/FetchRequest";

import './FileHandler.less';

const classNames = require("classnames");

interface FileHandlerPropsI {}

const FileHandler: FC<FileHandlerPropsI> = () => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    return () => console.log();
  }, []);

  const updateFilesList = (responce: any) => {
    console.log('responce from the server');
    console.log(responce);
  }

  sendFetch(url, {}, updateFilesList);

  const clickHandler = (event: SyntheticEvent<any, Event>, index: number, label: string) => {
    console.log('666666666666666666666666666666666666666666');
    
    setData(Object.assign({}, data, { navigationActiveIndex: index }));
    console.log(label);
    console.log(label.charAt(0));
    setUrl(`http://localhost:9000/disk/${label.charAt(0)}`);
  }

  const renderBody = () => {
    console.log("conditional rendering");
    if (data !== undefined) {
      return (
        <React.Fragment>
          <h1>Data fully loaded</h1>
          <div className={classNames("file-handler-nav-panel")}>
            <BottomNavigation
              activeNavigationItem={data.navigationActiveIndex}
              navigationItems={data.navigationItem}
              clickHandler={clickHandler}
            ></BottomNavigation>
          </div>

          {/* <div className="file-handler-cards-panel">
            {data.cards[data.activeIndex].map((item, index) => (
              <CustomCard key={index.toString()}>
                <h1>{item.label}</h1>
              </CustomCard>
            ))}
          </div> */}
        </React.Fragment>
      );
    } else {
      return <h1>Here must be a spinner! Data is still loading</h1>;
    }
  };

  return (
    <Container classes="file-handler-container">
      <h3>FileHandler Component !</h3>
      {renderBody()}
    </Container>
  );
}

export default FileHandler;