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
  cards: CardsItemI;
  activeIndex: string;
  loading: boolean;
  firstRun: boolean;
}

export default function () {}