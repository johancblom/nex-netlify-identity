import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../stores/authContext';

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  const LoginGreeting = () => {
    return (
      <li onClick={login} className="btn">
        Login/Signup
      </li>
    );
  };

  const LogoutGreeting = () => {
    return (
      <li onClick={logout} className="btn">
        Logout
      </li>
    );
  };

  const Greeting = () => {
    if (user) return <LogoutGreeting></LogoutGreeting>;
    return <LoginGreeting></LoginGreeting>;
  };
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
          <Greeting />
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
