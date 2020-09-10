import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import firebase from 'firebase';
import Login from './Login';
import Hero from './Hero';

const App = () =>{
  const [user,setUser] = useState('')
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError]  =useState('');
  const[passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false)

  const clearInputs =() =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email,password).catch(error => {
      switch(error.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(error.message);
              break;
        case "auth/wrong-password":
          setPassword(error.message);
          break;
      }
    })
  };

  const handleSignup =() =>{
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email,password).catch((error) => {
      switch(error.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(error.message);
              break;
        case "auth/weak-password":
          setPassword(error.message);
          break;
      }
    })
  };

  const handleLogout = () =>{
    fire.auth().signOut();
  }

  const authListner = () =>{
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser('');
      }
    })
  };

  useEffect(()=>{
    authListner();
  },[])

  return (
    <div className="App">
      {user?( <Hero handleLogout={handleLogout}/>)
      
      :(
        <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} 
      handleSignup={handleSignup} 
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      
      />

      )
      }
      
     
    </div>
  )
}


export default App;
