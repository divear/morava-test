// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,

	authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,

	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,

	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,

	messagingSenderId: process.env.NEXT_PUBLIC_SENDERID,

	appId: process.env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app, getFirestore, collection, addDoc, getAnalytics, logEvent };
