import { loggoutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, loggout ,login} from "./authSlice";

export const chekingAutentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(loggout(result.error.message));
    dispatch(login(result.userInfo));
  };
};

export const startCreatingUserWithEmailPassword = ({email,password,displayName})=>{
  return async (dispatch)=>{
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({email,password,displayName});
    if (!result.ok) return dispatch(loggout(result.errorMessage));
    dispatch(login(result.userInfo));
  }

}

export const startLoginWithEmailPassword = ({email,password})=>{
  return async (dispatch)=>{
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({email,password});
    if (!result.ok) return dispatch(loggout(result.errorMessage));
    dispatch(login(result.userInfo));
  }
}

export const startLoggout = ()=>{
  return async (dispatch)=>{
    await loggoutFirebase();
    dispatch(loggout({}));
  }
}

