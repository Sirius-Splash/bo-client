import '../../App.css';
import { useState } from "react";
import  { FC, Dispatch, SetStateAction } from "react";


// interface IInputs {
//   username: string;
//   password: string;
//   // handleCreateAccount: Dispatch<SetStateAction<>>
// }

const PersonalInfo:FC = () => {
  const [inputs, setInputs] = useState({});

  return (
    <div>

    <div>
      <form>

        <div>
          <label className="label">
            <span className="label-text text-primary">Enter your name: </span>
          </label>
        </div>

        <div>
            <input
              type="text"
              name="name"
              placeholder="ex: Buffboi"
              className="input bg-secondary input-bordered w-full max-w-xs"
            />
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Create a password: </span>
          </label>
        </div>

        <div>
            <input
              type="text"
              name="password"
              placeholder="Enter password here"
              className="input bg-secondary input-bordered w-full max-w-xs"
            />
        </div>




        <input type="submit"/>

      </form>
    </div>

    <div>
      <ul className="steps">
        <li className="step step-accent">Create Account</li>
        <li className="step step-accent">Personal Info</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
    </div>

    </div>
  );
}

export default PersonalInfo;