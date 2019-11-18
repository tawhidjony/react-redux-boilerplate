
const userReducer = (state='',action)=>{

    if (action.type === "key1") {
        return action.payload
    }


    return state;
}


export default userReducer;