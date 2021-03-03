import React, {Component, SyntheticEvent} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import {Container} from '../Common/Container/Container';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation';
import {CustomCard} from '../Common/Card/CustomCard';

import './FileHandler.less';

const {stockData} = require('../../data/data.js');
interface NavigationItemI {
  label: string;
  selected: number;
  index: string;
}

interface CardsItemI {
  [key: string] : Array<{label: string}>;
}

interface FileHandlerStateI {
  navigation: Array<NavigationItemI>;
  activeIndex: string;
  cards: CardsItemI;
}

interface FileHandlerPropsI {}

class FileHandler extends Component<FileHandlerPropsI, FileHandlerStateI> {
  constructor(props: FileHandlerPropsI) {
    super(props);
    this.state = stockData;
    console.log('inside fileHandler Constructor');
    console.log(stockData);
    
    console.log(this.state);
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  componentDidMount() {
    console.log('--> File Handler trigger component did mount');
  }

  navClickHandler(event: SyntheticEvent<any, Event>, index: number) {
    let activeIndex = '';
    const newData = this.state.navigation.map((item: NavigationItemI , itemIndex: number) => {
      if (itemIndex === index) {
        item.selected = 1;
        activeIndex = item.index;
      } else {
        item.selected = 0;
      }
      return item;
    });
    this.setState((state, props) => {
      return {
        navigation: newData,
        activeIndex: activeIndex,
      }
    });
  }

  render() {
    return (
      <Container classes="file-handler-container">
        <h3>FileHandler Component !</h3>
        <PrimaryButton title="Click me !" />

        <div className="file-handler-nav-panel">
          <BottomNavigation
            navigationItems={this.state.navigation}
            clickHandler={this.navClickHandler}
          ></BottomNavigation>
        </div>

        <div className="file-handler-cards-panel">
          {this.state.cards[this.state.activeIndex].map((item, index) => (
            <CustomCard key={index.toString()}>
              <h1>{item.label}</h1>
            </CustomCard>
          ))}
        </div>
      </Container>
    );
  }
}

export default FileHandler;