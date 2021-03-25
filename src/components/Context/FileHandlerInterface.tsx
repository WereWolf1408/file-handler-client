export interface NavigationItemI {
  label: string;
  selected: number;
  index: string;
}

interface CardsItemI {
  [key: string]: Array<{ label: string }>;
}

export interface DiskInfoI {
  [key: number]: {
    Capacity: string;
    Mounted: string;
  }
}
export interface DiskListI {
  navigationItem : DiskInfoI;
  firstRun: boolean;
  success: boolean;
  navigationActiveIndex: number;
}

export interface FileHandlerNavigationI {
  navigation: Array<NavigationItemI>;
  cards: CardsItemI;
  activeIndex: string;
  loading: boolean;
  firstRun: boolean;
}

// export default function () {}