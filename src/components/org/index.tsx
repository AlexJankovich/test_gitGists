import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import React from 'react';
import { OrgsData } from '../../types/OrgData';

const useStyles = makeStyles({
  root: {
    width: 320,
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  description: {
    fontSize: 14,
    wordWrap: 'break-word',
  },
  pos: {
    marginBottom: 12,
  },
});

export interface OrgProps {
  data: OrgsData;
}

export const Org: React.FC<OrgProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={data.avatar_url} />}
        title={data.login}
      />
      <CardContent>
        <Typography
          className={classes.description}
          color="textSecondary"
          gutterBottom
        >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
