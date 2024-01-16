import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mb-8 mx-6">
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSingIn} className="btn glass">
        <spam className="text-xl"><FcGoogle/></spam> Sing in with Google!
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
