import { setOrgs, setOrgsError } from 'src/redux/slices/orgs';
import { AppThunk } from 'src/redux/Store';
import { GITHUB_API } from '../config';

interface GetOrgsParams {
  id?: number;
  inPage?: number;
}

export const getOrgs = (params: GetOrgsParams = {}): AppThunk => async (
  dispatch
) => {
  const { id = 1, inPage } = params;
  const url = `${GITHUB_API}/organizations?per_page=${inPage}&since=${id}`;

  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
  });

  try {
    const response = await fetch(url, { headers });
    const json = await response.json();
    if (response.status === 200) {
      dispatch(setOrgs(json));
    } else {
      dispatch(setOrgsError(json.message));
    }
  } catch (error) {
    dispatch(setOrgsError(error));
  }
};
