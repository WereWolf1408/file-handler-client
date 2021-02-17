import React from 'react';
import { BottomNavigationAction } from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";

const CustomBottomNavigationAction = (props) => {
  return (
    <BottomNavigationAction
      label="Folder"
      value="folder"
      icon={<StorageIcon />}
    />
  );
}

export { CustomBottomNavigationAction as BottomNavigationAction};