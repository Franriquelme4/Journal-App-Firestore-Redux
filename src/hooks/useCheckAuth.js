import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'
import { loggout, login } from '../store/auth'
import { useEffect } from 'react'


export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
     onAuthStateChanged(firebaseAuth, (user) => {
        if(!user) return dispatch(loggout());
        const {uid,displayName,photoURL,email} = user;
        dispatch(login({
          uid,
          displayName,
          photoURL,
          email
        }));
  
       });
    }, [])
  
    return {status};
}
