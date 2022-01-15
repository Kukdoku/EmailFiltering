const initialState = {
  favoriate: [],
  read: [],
  unread: [],
  page: "home",
  filter: "all",
  DescriptionEmail: [],
};

const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDREAD":
      // let read1 = state.read.push(action.payload);
      let i = state.unread.indexOf(action.payload);
      state.unread.splice(i, 1);
      return {
        ...state,
        read: [...state.read, action.payload],
        unread: state.unread,
      };

    case "ADDUNREAD":
      // let read2 = state.unread.push(action.payload);
      return { ...state, unread: [...state.unread, action.payload] };

    case "ADDFAVORIATE":
      // let favoriate1 = state.favoriate.push(action.payload);
      return { ...state, favoriate: [...state.favoriate, action.payload] };

    case "REMOVEFAVORIATE":
      let t = state.favoriate.indexOf(action.payload);
      state.favoriate.splice(t, 1);
      return { ...state, favoriate: state.favoriate };

    case "MYPAGE":
      return { ...state, page: action.payload };

    case "MYFILTER":
      return { ...state, filter: action.payload };

    case "SETDESCRIPTIONEMAIL":
      return { ...state, DescriptionEmail: action.payload };
    default:
      return state;
  }
};

export default MyReducer;
