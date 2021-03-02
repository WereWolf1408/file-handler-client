import React from 'react';
import Card from '@material-ui/core/Card';

import './CustomCard.less';

interface CustomCardI {
  children: React.ReactNode,
}

const CustomCard  = (props: CustomCardI) => (
  <Card className="file-handler-card">
    {props.children}
  </Card>
);

export { CustomCard };