export const AddRead = (id) => {
  return { type: "ADDREAD", payload: id };
};
export const AddUnread = (id) => {
  return { type: "ADDUNREAD", payload: id };
};

export const AddFavoriate = (id) => {
  return { type: "ADDFAVORIATE", payload: id };
};

export const RemoveFavoriate = (id) => {
  return { type: "REMOVEFAVORIATE", payload: id };
};

export const MyPage = (page) => {
  return { type: "MYPAGE", payload: page };
};

export const MyFilter = (filter) => {
  return { type: "MYFILTER", payload: filter };
};

export const MyEmailDescription = (data)=>{
    return {type:'SETDESCRIPTIONEMAIL',payload:data}
}
