
import { toast } from "react-toastify"
import { authActions } from "../features/authSlice"
import { app } from "./config"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"

export const authObj = {
    auth: getAuth(app),
    googleProvider: new GoogleAuthProvider(app),

    login:async function(email, password){
        console.log(this.auth)
        try {
            await createUserWithEmailAndPassword(this.auth, email, password)
            console.log("login sucesfull")
        } catch (error) {
            console.log(error)
        }
    },

    googleAuth:async function(){
        try {
            return await signInWithPopup(this.auth, this.googleProvider)
        } catch (error) {
            console.log(error)
        }
    },

    curUser: function(dispatch, authLogin){
        onAuthStateChanged(this.auth, (user) =>{
            if(user)
            dispatch(authLogin({
                uid:user.uid,
                photo:user.photoURL,
                username:user.displayName,
                email: user.email
            }))
        })
    },

    logout:async function(){
        try {
            return await signOut(this.auth);
        } catch (error) {
            console.log(error)
        }

    }

    
}

