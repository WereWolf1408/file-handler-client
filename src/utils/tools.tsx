import {NavigationItemI, FileHandlerNavigationI} from '../components/Context/FileHandlerInterface';

interface ButtomNavigationClickHandlerI {
  (
    index: number,
    data: FileHandlerNavigationI
  ): {
    activeIndex: string,
    newData: Array<NavigationItemI>
  }
}

export const buttomNavigationClickHandler: ButtomNavigationClickHandlerI = (index, data) => {
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

  return {
    activeIndex,
    newData
  }
}

export default function () {}