import { useState } from "react";
// import  { Dispatch, SetStateAction } from "react";
import CreateAccount from "./CreateAccount";
import PersonalInfo from "./PersonalInfo";

// type IAccountDetails = {
//   username: string;
//   password: string;
//   name: string;
//   email: string;
//   age: number;
//   sex: string;
//   height: number;
//   weight: number;
//   experience: number;
//   goals: string;
//   equipment: boolean;
//   trainer: boolean;
//   profile_pic: string;
//   online_status: boolean;
// }

const SignUp = () => {
  const [accountDetails, setAccountDetails] = useState({});
  let step = 2;

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log(e.target.name);

  };

  return (
    <div>
      {
        step === 1 ?
          <CreateAccount
            handleCreateAccount={handleCreateAccount}
          />
        : step == 2 ?
          <PersonalInfo

          />
        : 'Hmmm'
      }
    </div>
  );
}

export default SignUp;