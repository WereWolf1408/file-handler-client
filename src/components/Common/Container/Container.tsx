import React from 'react';
import Container from "@material-ui/core/Container";

interface CustomContainerPropsI {
  classes?: string;
  children: React.ReactNode;
}

const CustomContainer = (props: CustomContainerPropsI) => (
  <Container className={props.classes} maxWidth="lg">
    {props.children}
  </Container>
);

export {CustomContainer as Container};