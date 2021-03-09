import React, {Component, useContext, SyntheticEvent, FunctionComponent as FC, useEffect} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import {Container} from '../Common/Container/Container';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation';
import {CustomCard} from '../Common/Card/CustomCard';
import {FileHandlerContext} from '../Context/FileHandlerContext';

import './FileHandler.less';

const {stockData} = require('../../data/data.js');

interface NavigationItemI {
  label: string;
  selected: number;
  index: string;
}

interface FileHandlerPropsI {}

const FileHandler: FC<FileHandlerPropsI> = () => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);
  const allData = useContext(FileHandlerContext);

  useEffect(() => {
    console.log('new file handle class based on hooks');
    console.log(data);
    console.log(allData);
  })

  const clickHandler = (event: SyntheticEvent<any, Event>, index: number) => {
    console.log("click handler");
    console.log(index);
    let activeIndex = "";
    const newData = data.navigation.map(
      (item: NavigationItemI, itemIndex: number) => {
        if (itemIndex === index) {
          item.selected = 1;
          activeIndex = item.index;
        } else {
          item.selected = 0;
        }
        return item;
      }
    );
    setData({
      navigation: newData,
      activeIndex: activeIndex,
      cards: data.cards,
    });
  }

  return (
    <Container classes="file-handler-container">
      <h3>FileHandler Component !</h3>
      <PrimaryButton title="Click me !" />

      <div className="file-handler-nav-panel">
        <BottomNavigation
          navigationItems={data.navigation}
          clickHandler={clickHandler}
        ></BottomNavigation>
      </div>

    </Container>
  );
}
// class FileHandler extends Component<FileHandlerPropsI, FileHandlerStateI> {

//   constructor(props: FileHandlerPropsI) {
//     super(props);
//     this.state = stockData;
//     console.log("inside fileHandler Constructor");
//     console.log(stockData);
//     console.log(this.state);
//     this.navClickHandler = this.navClickHandler.bind(this);
//   }

//   componentDidMount() {
//     console.log("--> File Handler trigger component did mount");
//   }

//   navClickHandler(event: SyntheticEvent<any, Event>, index: number) {
//     let activeIndex = "";
//     const newData = this.state.navigation.map(
//       (item: NavigationItemI, itemIndex: number) => {
//         if (itemIndex === index) {
//           item.selected = 1;
//           activeIndex = item.index;
//         } else {
//           item.selected = 0;
//         }
//         return item;
//       }
//     );
//     this.setState((state, props) => {
//       return {
//         navigation: newData,
//         activeIndex: activeIndex,
//       };
//     });
//   }

//   render() {
//     return (
//       <Container classes="file-handler-container">
//         <h3>FileHandler Component !</h3>
//         <PrimaryButton title="Click me !" />

//         <div className="file-handler-nav-panel">
//           <BottomNavigation
//             navigationItems={this.state.navigation}
//             clickHandler={this.navClickHandler}
//           ></BottomNavigation>
//         </div>

//         <div className="file-handler-cards-panel">
//           {this.state.cards[this.state.activeIndex].map((item, index) => (
//             <CustomCard key={index.toString()}>
//               <h1>{item.label}</h1>
//             </CustomCard>
//           ))}
//         </div>
//       </Container>
//     );
//   }
// }

export default FileHandler;