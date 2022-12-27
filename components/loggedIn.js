import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import GetTransactions from "./getTransactions";

import { initializeApp } from "firebase/app";
import {
  query,
  collection,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDM-QKJ2E1XV67LYstylLLIJS-2qeKFnEw",
    authDomain: "layer2-b9af0.firebaseapp.com",
    projectId: "layer2-b9af0",
    storageBucket: "layer2-b9af0.appspot.com",
    messagingSenderId: "411327514080",
    appId: "1:411327514080:web:d78ec1d4a2f410d20a5785",
    measurementId: "G-HR7MCT5J5G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function LoggedIn() {
  const [streams, setStreams] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "moralis/txs/optimism"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempStreams = [];
      querySnapshot.forEach((doc) => {
        tempStreams.push(doc.data());
      });
      setStreams(tempStreams);
    });
  }, []);

  return (
    <section className={styles.loggedInMain}>
      <section className={styles.loggedInAccount}>
        <section className={styles.result}>
          <p className={styles.title}>Transactions</p>
          <section>
            <GetTransactions />
          </section>
        </section>
        <section className={styles.result}>
          <p className={styles.title}>Streams</p>
          <section>
            {streams?.map((streams, i) => {
              return (
                <section className={styles.resultContainer} key={i}>
                  <section className={styles.resultContainer_data}>
                    <p>From: {streams.fromAddress}</p>
                    <p>To: {streams.toAddress}</p>
                    <p>Value: {streams.value / 1e18} ETH </p>
                  </section>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}