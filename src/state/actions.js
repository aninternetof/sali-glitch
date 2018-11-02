import axios from 'axios';

const SEARCH = 'SEARCH';

export const search = xhrOptions => ({
  type: SEARCH,
  payload: axios.get('https://1kmakv7vk1.execute-api.us-east-1.amazonaws.com/default/sali-query/?name=green', xhrOptions)
    .then(({ data }) => (
      data
    )),
});

