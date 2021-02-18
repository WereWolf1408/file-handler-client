import React, {Component} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton.jsx";
import {Container} from '../Common/Container/Container.jsx';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation.jsx';

import './FileHandler.less';

class FileHandler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Folder 1",
          selected: 1,
        },
        {
          label: "Folder 2",
          selected: 0,
        },
        {
          label: "Folder 3",
          selected: 0,
        },
      ],
    };
  }

  componentDidMount() {
    console.log('--> File Handler trigger component did mount');
  }

  render() {
    return (
      <Container classes="file-handler-container">
        <h3>FileHandler Component !</h3>
        <PrimaryButton title="Click me !" />
        <BottomNavigation storage={this.state.data}></BottomNavigation>
      </Container>
    );
  }
}

export default FileHandler;