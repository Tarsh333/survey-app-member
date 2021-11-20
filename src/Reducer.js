const Reducer=(state,action)=>{
    if (action.type==='CHANGE_LOGIN') {
        if (!action.payload) {
            localStorage.removeItem('token')
        }
        return({...state,loggedIn:action.payload})
    }
    throw new Error('no matching action type')
}
export default Reducer