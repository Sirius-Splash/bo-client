import { useState } from "react";
import  { Dispatch, SetStateAction } from "react";
import CreateAccount from "./CreateAccount";

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

const SignUp:React.FC = () => {
  const [accountDetails, setAccountDetails] = useState<any>({});

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log(e.target.name);

  };

  return (
    <div>
      <CreateAccount
        handleCreateAccount={handleCreateAccount}
      />
    </div>
  );
}

export default SignUp;


// // import { useState } from "react";
// // import React, { Dispatch, SetStateAction } from "react";
// import CreateAccount from "./CreateAccount";

// // interface IAccountDetails {
// //   username: string;
// //   password: string;
// //   name: string;
// //   email: string;
// //   age: number;
// //   sex: string;
// //   height: number;
// //   weight: number;
// //   experience: number;
// //   goals: string;
// //   equipment: boolean;
// //   trainer: boolean;
// //   profile_pic: string;
// //   online_status: boolean;
// // }

// const SignUp = () => {
//   // const [accountDetails, setAccountDetails] = useState({});

//   // const handleCreateAccount = () => {
//     // e.preventDefault();
//     // console.log(e.target.name);

//   // };

//   return (
//     <div>
//       <CreateAccount
//         // handleCreateAccount={handleCreateAccount}
//       />
//     </div>
//   );
// }

// export default SignUp;