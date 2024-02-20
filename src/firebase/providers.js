import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const user = result.user;
    console.log(user);
    const { displayName, email, photoURL, uid } = user;
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    return {
      ok: true,
      userInfo: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  } catch (error) {
    const { code, message } = error;
    return {
      ok: false,
      error: {
        code,
        message,
      },
    };
  }
};


export const registerUserWithEmailPassword = async ({email,password,displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth,email,password);
    const {uid,photoURL} = resp.user;
    console.log(resp);
    //Actualizar el display name en firebase
    await updateProfile(firebaseAuth.currentUser, {displayName})

    return {
      ok: true,
      userInfo: {displayName,email,photoURL, uid,
      },
    };
    
  } catch (error) {
    return {ok: false,errorMessage:error.message};
    
  }


}

export const loginWithEmailPassword = async ({email,password}) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth,email,password);
    const {displayName,photoURL,uid} = resp.user;
    return {
      ok: true,
      userInfo: {displayName,email,photoURL, uid,
      },
    };
  } catch (error) {
    return {ok: false,errorMessage:error.message};
  }
}

export const loggoutFirebase = async () => {
   return await firebaseAuth.signOut();
}