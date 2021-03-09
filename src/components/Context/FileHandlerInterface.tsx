export interface NavigationItemI {
  label: string;
  selected: number;
  index: string;
}

interface CardsItemI {
  [key: string]: Array<{ label: string }>;
}

export interface FileHandlerNavigationI {
  navigation: Array<NavigationItemI>;
  activeIndex: string;
  cards: CardsItemI;
}
 
export default function () {}