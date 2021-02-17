import React, {Component} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import {Container} from '../Common/Container/Container.jsx';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation.jsx';

import './FileHandler.less';

class FileHandler extends Component {
  render() {
    return (
      <Container classes="file-handler-container">
        <h3>FileHandler Component !</h3>
        <PrimaryButton title="Click me !" />
        <BottomNavigation></BottomNavigation>
      </Container>
    );
  }
}

export default FileHandler;