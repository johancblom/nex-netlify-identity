import styles from '../styles/Guides.module.css';
import netlifyIdentity from 'netlify-identity-widget';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../stores/authContext';

export default function Guides() {
  const { user, login, logout } = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
  }, [user]);
  console.log(user);
  if (loggedIn) {
    return (
      <div className={styles.guides}>
        <h2>All Guides</h2>
      </div>
    );
  } else {
    login();
    return (
      <div className={styles.guides}>
        <h2>Please login first</h2>
      </div>
    );
  }
}
