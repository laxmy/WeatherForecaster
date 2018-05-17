import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action)
{
  switch (action.type) {
    case "FETCH_WEATHER":
      console.log("Received action data:" + action.payload.data);
      return state.concat([action.payload.data]);
  }
  return state;
}
