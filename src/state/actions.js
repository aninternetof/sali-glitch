import axios from 'axios';

export const SEARCH = 'SEARCH';
export const SEARCH_PENDING = `${SEARCH}_PENDING`;
export const SEARCH_FULFILLED = `${SEARCH}_FULFILLED`;
export const SEARCH_REJECTED = `${SEARCH}_REJECTED`;

export const search = (name, xhrOptions) => ({
  type: SEARCH,
  payload: axios.get(`https://1kmakv7vk1.execute-api.us-east-1.amazonaws.com/default/sali-query/?name=${name}`, xhrOptions)
    .then(({ data }) => (
      data
    )),
});

