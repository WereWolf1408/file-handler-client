import React, {Component} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import {Container} from '../Common/Container/Container.jsx';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation.jsx';
import {CustomCard} from '../Common/Card/CustomCard.jsx';
import {stockData} from '../../data/data';

import './FileHandler.less';

class FileHandler extends Component {

  constructor(props) {
    super(props);
    this.state = stockData;
    console.log('inside fileHandler Constructor');
    console.log(this.state);
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  componentDidMount() {
    console.log('--> File Handler trigger component did mount');
  }

  navClickHandler(event, index) {
    let activeIndex = 0;
    const newData = this.state.navigation.map((item, itemIndex) => {
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
            storage={this.state.navigation}
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