import React from 'react';
import Card from '@material-ui/core/Card';

import './CustomCard.less';

const CustomCard  = (props) => (
  <Card className="file-handler-card">
    {props.children}
  </Card>
);

export { CustomCard };