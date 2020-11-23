import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrgCurrentPage } from 'src/redux/slices/orgs';
import { RootState } from 'src/redux/Store';
import { getOrgs } from '../../redux/thunks/orgs/getOrgs';
import { ErrorMessage } from '../common/ErrorMessage/ErrorMessage';
import { Preloader } from '../common/Preloader/Preloader';
import { Org } from '../org';

export interface OrgsListProps {}

const OrgsList: React.FC<OrgsListProps> = () => {
  const dispatch = useDispatch();
  const { isLoading, orgs, isError, inPage, currentPage } = useSelector(
    (state: RootState) => {
      return state.orgs;
    }
  );

  const [onChangeId, setOnchangeId] = React.useState<number>(1);
  const [newId, setNewId] = React.useState<number>(1);

  useEffect(() => {
    dispatch(getOrgs({ inPage, id: newId }));
  }, [dispatch, inPage, newId]);

  const changeDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOnchangeId(+e.currentTarget.value);
  };

  const sortByIdHandler = () => {
    if (!onChangeId) {
      return;
    }
    setNewId(+onChangeId);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setOrgCurrentPage(value));
    if (value === 1) {
      setNewId(1);
    } else {
      setNewId(orgs[orgs.length - 1].id);
    }
  };

  return (
    <>
      <Grid
        container
        justify="center"
        style={{ padding: 24 }}
        spacing={5}
        xl={12}
      >
        <Grid item>
          <TextField
            type="number"
            onChange={changeDateHandler}
            disabled={isLoading}
            value={onChangeId}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={sortByIdHandler}
            disabled={isLoading}
            variant={'outlined'}
          >
            Sort by ID
          </Button>
        </Grid>
      </Grid>
      {isLoading ? (
        <Preloader />
      ) : (
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {isError && <ErrorMessage isError={isError} />}
            <>
              {orgs.map((org) => (
                <Grid key={org.id} item>
                  <Org data={org} />
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
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default OrgsList;
