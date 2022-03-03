import './App.css';
import {auth} from "./firebase"
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from './components/HomePage';


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <HomePage /> : <SignIn /> }
    </div>
  );
}

export default App;
