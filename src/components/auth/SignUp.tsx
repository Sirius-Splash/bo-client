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
  const [personalDetails, setPersonalDetails] = useState({});
  const [step, setStep] = useState(1)

  const handleCreateAccount = (inputs) => {
    console.log(inputs);
    setAccountDetails(values => ({...values, username: inputs.username, password: inputs.password, email: inputs.email}));
    setStep(step + 1);
  };

  const handlePersonalInfo = (inputs) => {
    console.log(inputs);

    setStep(step + 1);
  };


  console.log('ACC DEETS: ', accountDetails);
  return (
    <div>
      {
        step === 1 ?
          <CreateAccount
            handleCreateAccount={handleCreateAccount}
          />
        : step == 2 ?
          <PersonalInfo
            handlePersonalInfo={handlePersonalInfo}
          />
        : 'Hmmm'
      }
    </div>
  );
}

export default SignUp;