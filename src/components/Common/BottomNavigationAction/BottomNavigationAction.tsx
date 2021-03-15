import React, { SyntheticEvent } from "react";
import { BottomNavigationAction } from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";

interface CustomButNavActionI {
  label: string;
  isSelected: boolean;
  onClickHandler: (event: SyntheticEvent<any, Event>, index: number) => void;
  index: number;
} 

const CustomBottomNavigationAction = (props: CustomButNavActionI) => {
  const { label, isSelected, onClickHandler, index } = props;

  const onClick: (event: SyntheticEvent<any, Event>) => void = (event) => {
    console.log(props);
    onClickHandler(event, index);
  }

  return (
    <BottomNavigationAction
      selected={isSelected}
      label={label}
      value="folder"
      showLabel={true}
      onClick={onClick}
      icon={<StorageIcon />}
    />
  );
};

export { CustomBottomNavigationAction as BottomNavigationAction };
