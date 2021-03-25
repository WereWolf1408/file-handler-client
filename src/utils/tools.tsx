import {NavigationItemI, DiskInfoI} from '../components/Context/FileHandlerInterface';

interface ButtomNavigationClickHandlerI {
  (
    index: number,
    data: DiskInfoI
  ): {
    activeIndex: string,
    newData: Array<NavigationItemI>
  }
}

// export const buttomNavigationClickHandler: ButtomNavigationClickHandlerI = (index, data) => {
//   console.log('**************************');
//   console.log(index);
//   console.log(data);
  
//   let activeIndex = "";
//   Array.prototype.forEach.call(data, (element: {Capacity: string, Mounted: string}) => {
//     console.log(element);
//     console.log(element.Capacity);
//   })
  // const newData = data.navigation.map(
  //   (item: NavigationItemI, itemIndex: number) => {
  //     if (itemIndex === index) {
  //       item.selected = 1;
  //       activeIndex = item.index;
  //     } else {
  //       item.selected = 0;
  //     }
  //     return item;
  //   }
  // );

  // return {
  //   activeIndex,
  //   newData
  // }
// }

export default function () {}