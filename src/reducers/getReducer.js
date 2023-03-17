const initialState = {
    all_capsules : []
  };

const getReducer = (state=initialState, action) => {
    switch(action.type){
        case "ALL_CAPSULES":
            return {
                ...state,
                all_capsules : action.data
            }
        default:
            return state;
    }
}

export default getReducer