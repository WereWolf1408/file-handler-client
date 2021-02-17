import React, {Component} from 'react';
import PrimaryButton from "../Buttons/PrimaryButton.jsx";

import './FileHandler.less';

class FileHandler extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>FileHandler Component !</h3>
        <PrimaryButton title="Click me !" />
      </React.Fragment>
    )
  }
}

export default FileHandler;