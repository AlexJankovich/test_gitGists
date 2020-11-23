import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import React from 'react';
import { GistData } from 'src/types/GistData';

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

export interface GistProps {
  data: GistData;
}

export const Gist: React.FC<GistProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={data.owner.avatar_url} />}
        title={data.owner.login}
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
