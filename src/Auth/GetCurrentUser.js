import React, { useEffect, useState } from "react";
import { auth, fs } from "../Auth/firebaseConfig";

export function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().name);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }