const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SONG":
      return { ...state, loading: true };
    case "GET_SONG_SUCCEDED":
      return { ...state, song: action.songResults, loading: false };
    case "GET_SONG_FAILED":
      return { ...state, message: action.message, loading: false };
    default:
      return state;
  }
};
export default reducer;
