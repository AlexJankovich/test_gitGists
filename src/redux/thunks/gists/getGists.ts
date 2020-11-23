import { setGists, setGistsError } from 'src/redux/slices/gists';
import { AppThunk } from 'src/redux/Store';
import { GITHUB_API } from '../config';

interface GetGistsParams {
  page?: number;
  inPage?: number;
  since?: string;
}

export const getGists = (params: GetGistsParams = {}): AppThunk => async (
  dispatch
) => {
  const { page, inPage, since } = params;
  let url = `${GITHUB_API}/gists/public?page=${page}&per_page=${inPage}`;

  if (since) {
    url += `&since=${new Date(since).toISOString()}`;
  }

  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
  });

  try {
    const response = await fetch(url, { headers });
    const json = await response.json();
    if (response.status === 200) {
      dispatch(setGists(json));
    } else {
      dispatch(setGistsError(json.message));
    }
  } catch (error) {
    dispatch(setGistsError(error));
  }
};
