import {Typography} from '@material-ui/core';
import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/styles';

type ErrorMessagePropsType = {
  isError: string;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    fontSize: '20px',
    color: 'white',
    padding: '10px 30px',
  },
});

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({ isError }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (isError !== undefined) {
      setOpen(true);
    }
  }, [isError]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography className={classes.root}>{`Error: ${isError}`}</Typography>
    </Dialog>
  );
};
