import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'src/redux/slices/gists';
import { RootState } from 'src/redux/Store';
import { getGists } from '../../redux/thunks/gists/getGists';
import { ErrorMessage } from '../common/ErrorMessage/ErrorMessage';
import { Preloader } from '../common/Preloader/Preloader';
import { Gist } from '../gist';

export interface GistListProps {}

const GistList: React.FC<GistListProps> = () => {
  const dispatch = useDispatch();

  const { isLoading, gists, isError, currentPage, inPage } = useSelector(
    (state: RootState) => {
      return state.gists;
    }
  );

  const [onChangeDate, setOnchangeDate] = React.useState<string>('');

  const [newDate, setNewDate] = React.useState<string>('');

  useEffect(() => {
    dispatch(getGists({ inPage, page: currentPage, since: newDate }));
  }, [dispatch, currentPage, inPage, newDate]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  const changeDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOnchangeDate(e.currentTarget.value);
  };

  const sortByDateHandler = () => {
    if (!onChangeDate) {
      return;
    }
    setNewDate(onChangeDate);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        style={{ padding: 24 }}
        xl={12}
        spacing={5}
      >
        <Grid item>
          <TextField
            type="date"
            onChange={changeDateHandler}
            disabled={isLoading}
            value={onChangeDate}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={sortByDateHandler}
            disabled={isLoading}
            variant={'outlined'}
          >
            Sort by date
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <Preloader />
      ) : (
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {isError ? (
              <ErrorMessage isError={isError} />
            ) : (
              <>
                {gists.map((gist) => (
                  <Grid key={gist.id} item>
                    <Gist data={gist} />
                  </Grid>
                ))}
                <Grid container justify="center" style={{ padding: 24 }}>
                  <Pagination
                    count={3000 / inPage}
                    page={currentPage}
                    onChange={handleChange}
                    siblingCount={1}
                    variant="outlined"
                    shape="rounded"
                    disabled={isLoading}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default GistList;
