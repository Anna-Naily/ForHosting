import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMtDATq5yduZ_284-1YgueRsDgRfwfrTk",
  authDomain: "chatprojectreact.firebaseapp.com",
  projectId: "chatprojectreact",
  storageBucket: "chatprojectreact.appspot.com",
  messagingSenderId: "974555281641",
  appId: "1:974555281641:web:7aa3db7b2f8e5103d31878",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);

export const userRef = ref(db, "user");

export const chatsRef = ref(db, "chats");

export const messagesRef = ref(db, "messages");

export const getChatRefById = id => ref(db, `chats/${id}`);

export const getChatMsgsListRefById = chatId =>
  ref(db, `messages/${chatId}/messageList`);

export const getChatMsgsRefById = chatId => ref(db, `messages/${chatId}`);
