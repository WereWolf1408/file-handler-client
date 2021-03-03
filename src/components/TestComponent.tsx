import React from "react";

class TestAPIComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div>
        <h2>Test API</h2>
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
    );
  }
}

export default TestAPIComponent;