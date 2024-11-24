import { doc, setDoc, getFirestore } from "firebase/firestore";

import { app } from './firebase-app';

import { signUp } from './auth';

const db = getFirestore(app);

export const addUser = async (data) => {
  const { email, password, ...otherData } = data;

  try {
    const loginInfo = await signUp(email, password);

    await setDoc(
      doc(db, 'users', loginInfo.uid), 
      otherData,
    );
  } catch(error) {
    console.error(error);
  }
};
