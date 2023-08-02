import { useState } from "react";
import  { FC, Dispatch, SetStateAction } from "react";


// interface IInputs {
//   username: string;
//   password: string;
//   // handleCreateAccount: Dispatch<SetStateAction<>>
// }

const PersonalInfo = () => {
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
              value={inputs.name || ''}
              placeholder="ex: Buffboi"
              className="input bg-secondary input-bordered w-full max-w-xs"
            />
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Enter your age: </span>
          </label>
        </div>

        <div>
            <input
              type="number"
              name="age"
              min={16}
              max={120}
              value={inputs.age || 18}
              className="input bg-secondary input-bordered w-20 max-w-xs"
            />
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">What is your sex? </span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input
              type="radio"
              name="sex"
              className="radio checked:bg-accent"
              checked
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Female</span>
            <input
              type="radio"
              name="sex"
              className="radio checked:bg-accent"
            />
          </label>
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Enter your height: </span>
          </label>
        </div>

        <div>
            <input
              type="number"
              name="heightInFeet"
              min={4}
              max={7}
              value={inputs.heightInFeet}
              placeholder="Ft."
              className="input bg-secondary input-bordered w-20 max-w-xs"
            />

            <input
              type="number"
              name="heightInInches"
              min={0}
              max={11}
              value={inputs.heightInInches}
              placeholder="In."
              className="input bg-secondary input-bordered w-20 max-w-xs"
            />
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Enter your weight: </span>
          </label>
        </div>

        <div>
            <input
              type="number"
              name="weight"
              min={70}
              max={500}
              value={inputs.weight || 150}
              className="input bg-secondary input-bordered w-20 max-w-xs"
            />
        </div>





        <div>
          <label className="label">
            <span className="label-text text-primary">How experienced are you? </span>
          </label>
        </div>

        <div>
          <input
            type="range"
            name="experience"
            min={0}
            max={2}
            // value={1 || inputs.experience}
            className="range range-accent"
            step={1}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>Scrub</span>
            <span>Bro</span>
            <span>Gym Bro</span>
          </div>
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Do you have equipment, or access to a gym? </span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
          <span className="label-text">I have equipment / gym</span>
            <input
              type="checkbox"
              name="equipment"
              className="toggle toggle-accent"
            />
          </label>
        </div>




        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-primary">What is your primary goal at the gym?</span>
          </label>
          <select className="select select-accent" name="goals">
            <option disabled selected>Pick one</option>
            <option>Lose weight</option>
            <option>Gain muscle mass</option>
            <option>Improve muscle tonality</option>
            <option>Improve cardio</option>
          </select>
        </div>




        <div>
          <label className="label">
            <span className="label-text text-primary">Are you signing up as a trainer? </span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
          <span className="label-text">Yes, I am a trainer</span>
            <input
              type="checkbox"
              name="trainer"
              className="toggle toggle-accent"
            />
          </label>
        </div>


        <div style={{marginTop: 40, marginBottom: 40}}>
          <input type="submit" className="btn"/>
        </div>
      </form>
    </div>

    <div>
      <ul className="steps">
        <li className="step step-accent">Create Account</li>
        <li className="step step-accent">Personal Info</li>
        <li className="step">Login</li>
        {/* <li className="step">Review</li>  STRETCH GOAL*/}
      </ul>
    </div>

    </div>
  );
}

export default PersonalInfo;