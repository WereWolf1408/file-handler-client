import React from "react";
import PropTypes from "prop-types";
import { BottomNavigationAction } from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";

const CustomBottomNavigationAction = (props) => {
  const { label, isSelected, onClickHandler, index } = props;

  const onClick = (event) => {
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

CustomBottomNavigationAction.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export { CustomBottomNavigationAction as BottomNavigationAction };
