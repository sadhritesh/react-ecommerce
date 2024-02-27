import { createSlice } from "@reduxjs/toolkit";
import getLocalStorageData from '../LocalStorage/getLocalStorageData.js'
import setLocalStorageData from "../LocalStorage/setLocalStorageData.js"

const initialState = {
    users: [],
    userName: "",
    userGmail: "",
    userPassword: "",
    message: "",
    isLoggedIn: false,
    activeUser: {}
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUsersData: (state, action) => {
            let users = getLocalStorageData("users") 
            state.users = users ? users : []
            
            let user = state.users?.find((user)=>(
                user.isActive === true 
            ))

            if (user){
                state.activeUser = user 
                state.isLoggedIn = true
            }
        },
        createAccount: (state, action) => {

            if (state.userGmail && state.userName && state.userPassword){
                const isUserPresent = state.users?.some((user)=>user.gmail === state.userGmail)

                if (!isUserPresent){
                    const user = {
                        name : state.userName,
                        gmail : state.userGmail,
                        password : state.userPassword,
                        isActive: false
                    }
    
                    state.users = [...state.users, user]
                    state.message ={type:"success", text:"Account Created"}
                    setLocalStorageData("users", state.users)
                }else{
                    state.message = {type:"error", text:"User Already Present"}
                }
            }else{
                state.message = {type:"error", text:"Invalid credentials"}
            }

            state.userName = ""
            state.userGmail = ""
            state.userPassword = ""
            // console.log(state.users);
        }, 
        setUserName: (state, action)=> {
            state.userName = action.payload
            state.message = ""
        },
        setUserGmail: (state, action)=> {
            state.userGmail = action.payload
            state.message = ""
        },
        setUserPassword: (state, action)=> {
            state.userPassword = action.payload
            state.message = ""
        },
        userLogin: (state, action) => {
            const { users, userGmail, userPassword } = action.payload;

            let user = users?.find(user => (
                user.gmail === userGmail && user.password === userPassword
            ));
        
            if(user){
                state.isLoggedIn = true
                state.activeUser = user 
                let UpdatedUserActiveStatus = {
                    ...user,
                    isActive:true
                }
                state.users = state.users?.map((currUser)=>(
                    currUser.gmail != user.gmail ? currUser : UpdatedUserActiveStatus
                ))
                setLocalStorageData("users", state.users)
                state.message = {type:"success", text:`${state.activeUser.name} logged in successfully`}
            }else{
                if (!state.userGmail || !state.password){
                    state.message = {type:"error", text:"Invalid credentials"}
                }else{
                    state.message = {type:"error", text:"User not found"}
                }
            }
            state.userGmail = ""
            state.userPassword = ""
        },
        userLogout: (state, action)=> {
            state.users = state.users?.map((user)=>(
                user.gmail != action.payload ? user : {...user, isActive: false }
            ))
            state.isLoggedIn = false
            state.activeUser = {}
            state.message = {type:"success", text:"Logged out successfully"}
            setLocalStorageData("users", state.users)
        },
        setMessage: (state, action)=> {
            state.message = null
        }
        
    }
}) 

export const { setUsersData, createAccount, setUserName, setUserGmail, setUserPassword, userLogin, userLogout,setMessage } = authenticationSlice.actions

export default authenticationSlice.reducer