import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../firebase/firebasae.init";

const SingUp = () => {
  const [singError, setSingError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(email, password, terms);

    setSingError("");
    setSuccess("");

    if (password.length < 6) {
      setSingError("you have benn must at list 6 character password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSingError("you have at list one capital later");
      return;
    } else if (!/[0-9]/.test(password)) {
      setSingError("you have at list one number");
      return;
    } else if (!terms) {
      setSingError("please accepts our terms & conditions");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("create user is successfully done");
      })
      .catch((error) => {
        console.log(error);
        setSingError(error.message);
      });
  };

  return (
    <div>
      <h1>Sing up please....</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing up now!</h1>
            <p className="py-6 w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={() => setShow(!show)}>
                  {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                <div>
                  <input className="mr-3" type="checkbox" name="terms" />
                  <label htmlFor="checkbox">
                    please accepted our terms and condition
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing Up</button>
              </div>
            </form>
            {singError && <p className="text-red-600 p-5">{singError}</p>}
            {success && <p className="text-green-600 p-5">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
