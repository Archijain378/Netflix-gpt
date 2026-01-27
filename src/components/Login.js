import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsSignForm(!isSignForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img src={BG_URL} alt="bg-img" />
      </div>
      <form className="w-3/12 absolute p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-6 px-4">
          {isSignForm ? "sign In" : "sign up"}
        </h1>
        {!isSignForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-2 m-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 m-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold mx-6">{errorMessage}</p>
        <button
          className="bg-red-600 p-2 m-4 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignForm ? "Sign In" : "sign Up"}
        </button>
        <p className="mx-6 cursor-pointer" onClick={handleToggle}>
          {isSignForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
