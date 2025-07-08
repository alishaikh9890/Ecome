import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./config";

 
export const dataStoreObj = {
    db: getFirestore(app),

    setCart: async function(uid, cart){
        try {       
           await setDoc(doc(this.db, "cart", uid), cart)
        } catch (error) {
            console.log(error)
        }
    },

    getCart: async function(uid) {
        try {
            return await getDoc(doc(this.db, "cart", uid))
        } catch (error) {
            console.log(error)
        }
    },

    setWish: async function(wish){
        try {       
           await setDoc(doc(this.db, "User1", "wish"),{
               wish:wish
           })
        } catch (error) {
            console.log(error)
        }
    }


}