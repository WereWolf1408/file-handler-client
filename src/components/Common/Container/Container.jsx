import React from 'react';
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

const CustomContainer = (props) => (
  <Container className={props.classes} maxWidth="lg">
    {props.children}
  </Container>
);

CustomContainer.propTypes = {
  classes: PropTypes.string,
};

export {CustomContainer as Container};