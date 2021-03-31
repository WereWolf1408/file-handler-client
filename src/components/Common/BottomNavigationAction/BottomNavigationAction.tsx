import React, { SyntheticEvent } from "react";
import { BottomNavigationAction } from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";

interface CustomButNavActionI {
  label: string;
  isSelected: boolean;
  onClickHandler: (event: SyntheticEvent<any, Event>, index: number, label: string) => void;
  index: number;
  mounted: string;
}

const CustomBottomNavigationAction = (props: CustomButNavActionI) => {
  const { label, isSelected, onClickHandler, index, mounted } = props;

  const onClick: (event: SyntheticEvent<any, Event>) => void = (event) => {
    onClickHandler(event, index, mounted);
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
