/**
 * @description
 * experimental common function to  handle the commmonly
 * used redux action that handles the reducing on the
 * basis of the endpoints.
 */
import axios from "axios";
import { fetchAction } from ".";

const headers = {
  "Content-Type": "application/json",
};

/**
 * trigger fetch entity function
 * @param {*} param0
 */
export const fetchEntity = ({ endpoint, payload, page, limit, custom }) => (
  dispatch
) => {
  if (!endpoint) {
    return dispatch(error({ error: "Required endpoint is missing." }));
  }
  dispatch(fetchAction({ fetching: true }));
  const body = Object.assign({}, payload, { page, limit });

  axios
    .get(endpoint, body, { headers })
    .then((response) => {
      const {
        data: { data },
      } = response;
        dispatch({
          type: endpoint,
          data,
        });
      dispatch(fetchAction({ fetching: false }));
    })
    .catch((err) => {
      console.error(err);
      dispatch(fetchAction({ fetching: false }));
      dispatch(error({ error: "Error while fetching entity list." }));
    });
};
