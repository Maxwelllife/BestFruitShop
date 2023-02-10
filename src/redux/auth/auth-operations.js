import { db, auth, storage } from "../../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { updateUserProfile, authLogOut } from "./auth-reducer";

export const register =
    ({ login, email, password }) =>
    async (dispatch, getState) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            // тут только логин потому что при создании уже туда положили email и password
            // await updateProfile(auth.currentUser, {
            //     displayName: login,
            // });

            // обновили стор данными (к примеру в photoURL мы уже положили avatar взятый из сервера)
            dispatch(
                updateUserProfile({
                    userId: user.uid,
                    // login,
                    email: user.email,
                })
            );
        } catch (error) {
            console.log("error.message", error.message);
        }
    };

export const login =
    ({ email, password }) =>
    async (dispatch, getState) => {
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            dispatch(
                updateUserProfile({
                    userId: user.uid,
                    login: user.displayName,
                    email: user.email,
                })
            );
        } catch (error) {
            console.log("error.message", error.message);
        }
    };

export const logOut = () => async (dispatch, getState) => {
    await auth.signOut();
    dispatch(authLogOut());
};

export const getCurrentUser = () => (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
        if (!user) return;

        dispatch(
            updateUserProfile({
                userId: user.uid,
                login: user.displayName,
                email: user.email,
            })
        );
    });
};
