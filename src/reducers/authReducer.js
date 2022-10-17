
const INIT_STATUS = {
    isSignedIn: null,
    userId: null,
}

const authReducer =  (status=INIT_STATUS,{type,payload})=>{
    switch(type){
        case 'SIGN_IN':
            return {...status, isSignedIn: true, userId:payload};
        case 'SIGN_OUT':
            return {...status,isSignedIn: false,userId:null};
        default:
            return status;
    }
}

export default authReducer;