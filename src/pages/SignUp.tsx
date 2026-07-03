import React, { useRef, useState, useReducer } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "./pages.css";

interface ReducerState {
  inputType: string;
  errorMessage: string;
}

interface ReducerAction {
  type: string;
  payload: string;
}

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "TextType":
      console.log(state, action);
      return {
        inputType: action.type,
        errorMessage: action.payload,
      };
    case "NumberType":
      return {
        inputType: action.type,
        errorMessage: action.payload,
      };
    default:
      return { ...state, errorMessage: "None" };
  }
}

const SignUp: React.FC = () => {
  const inputShowPassword = useRef<HTMLInputElement | null>(null);
  const inputShowConfirmPassword = useRef<HTMLInputElement | null>(null);
  const [errorActive, setErrorActive] = useState<boolean>();
  // const [inputValue, setInputValue] = useState<string[]>();
  const initialState: ReducerState = {
    inputType: "None",
    errorMessage: "None",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputType, errorMessage } = state;

  function showPassword(
    inputElement: React.RefObject<HTMLInputElement | null>,
    e: React.SyntheticEvent,
  ): void {
    if (inputElement.current?.type == "password") {
      inputElement.current.type = "text";
      const iconString = renderToString(
        <FaEye size={"1.4rem"} color={"white"} />,
      );
      e.currentTarget.innerHTML = `${iconString}`;
    } else if (inputElement.current?.type == "text") {
      inputElement.current.type = "password";
      const iconString = renderToString(
        <FaEyeSlash size={"1.4rem"} color={"white"} />,
      );
      e.currentTarget.innerHTML = `${iconString}`;
    }
  }

  const inputChecks = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.currentTarget.type) {
      case "text":
        console.log("Text input here");
        if (e.currentTarget.value == "") {
          setErrorActive(true);
          dispatch({
            type: "TextType",
            payload: "Sorry input field can't be left empty",
          });
        } else {
          setErrorActive(false);
          dispatch({
            type: "TextType",
            payload: "",
          });
        }
        break;
      case "email":
        console.log("Email input here");
        break;
      case "number":
        if (typeof e.currentTarget.value != "number")
          dispatch({
            type: "NumberType",
            payload: "Please insert a valid Phone number!!",
          });
        console.log("blah blah blah sheep, are you feeling good!!");
        break;
      case "password":
        console.log("Password input here");
        break;
      default:
        console.log(e.currentTarget.type);
        break;
    }
  };
  // gonna map switch statement to check different input field add implement different security measure.
  //   gotta make frontend security about confirm password to match exactly the password and number to be accurate with right length and not characters.
  // also gotta create another dropdown for different number zip code and maybe get an api to secure user location for easy accept to their regional number

  return (
    <div className="w-full h-325 pt-10 bg-white">
      <div className="w-[90%] h-300 flex m-auto overflow-hidden rounded-4xl relative bg-[url(testPhoto1.jpg)] bg-fixed bg-cover bg-no-repeat test-test">
        <svg
          className="absolute top-0 left-[30%] flex-initial h-[101%] z-5"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://w3.org"
        >
          <defs>
            <path
              id="track-curve"
              d="M 200, 0 C 100, 66 100, 133 200, 200 C 300, 266 300, 333 200, 400 C 100, 466 100, 533 200, 600 C 300, 666 300, 733 200, 850"
            />
          </defs>
          <use
            href="#track-curve"
            stroke="#ffff"
            strokeWidth="30"
            strokeDasharray="3, 8"
          />
          <use href="#track-curve" stroke="#transparent" strokeWidth="28" />
          <use
            href="#track-curve"
            x="-12"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="12, 8"
            strokeLinecap="round"
          />
          <use
            href="#track-curve"
            x="12"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="12, 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="flex-1 z-10">
          <div className="w-full h-20 p-5 ">
            <button className="w-30 h-15 rounded-4xl text-center bg-blue-400">
              Home
            </button>
          </div>
          <div className="w-full h-37.5 flex flex-col items-center justify-center gap-4">
            <img
              src="testPhoto1.jpg"
              alt="LogoPic"
              className="w-50 h-17.5 object-contain object-center"
            />
            <h2 className="text-2xl font-SuperSlice text-white">Sign UP</h2>
            <p className="text-sm font-Runtime text-white">
              See what is happening around the globe
            </p>
          </div>

          <form
            action=""
            className="w-full h-[600px] flex flex-col gap-9 items-center justify-center gap-3"
          >
            <div
              className={`w-125 min-w-75 h-17.5 inputbox ${
                errorActive
                  ? ""
                  : "after:border-b-3 after:border-b-green-500 rounded-b-2xl"
              } `}
            >
              <input
                required
                type="text"
                className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                autoComplete="off"
                placeholder={`${errorActive ? "Sorry something went wrong..!!" : "Mr/Mrs"}`}
                id="name"
                onBlur={(e) => inputChecks(e)}
              />
              <label
                htmlFor="name"
                className="input-label text-xl font-SairaStencil font-extralight text-gray-600"
              >
                Enter text
              </label>
              <i
                style={
                  {
                    "--contents": `"${inputType == "TextType" ? errorMessage : ""}"`,
                  } as React.CSSProperties
                }
                className={`after:text-base after:text-red-600 after:font-Runtime after:absolute after:bottom-0 after:left-0 after:w-full
               after:z-100 after:content-(--contents) after:pl-[10px] after:not-italic`}
              ></i>
            </div>

            <div className="w-125 min-w-75 h-17.5 inputbox">
              <input
                required
                type="email"
                className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                autoComplete="off"
                placeholder="Mr/Mrs Email"
                id="email"
                maxLength={254}
                onBlur={(e) => inputChecks(e)}
              />
              <label
                htmlFor="email"
                className="input-label text-xl font-SairaStencil font-extralight text-gray-600"
              >
                Email
              </label>
              <i></i>
            </div>

            <div className="w-125 min-w-75 h-17.5 inputbox">
              <input
                required
                type="number"
                className="text-xs text-white font-Sekuya bg-[url(staff.png)] bg-no-repeat bg-size-[25px] bg-position-[98%]"
                autoComplete="off"
                placeholder="Mr/Mrs Phone Number"
                id="number"
                onBlur={(e) => inputChecks(e)}
              />
              <label
                htmlFor="name"
                className="input-label text-xl font-SairaStencil font-extralight text-gray-600"
              >
                Phone Number
              </label>
              <i></i>
            </div>

            <div className="w-125 min-w-75 h-17.5 inputbox">
              <input
                required
                type="password"
                className="text-xs text-white font-Sekuya"
                autoComplete="off"
                placeholder="Mr/Mrs Magic Words"
                id="password"
                ref={inputShowPassword}
                onBlur={(e) => inputChecks(e)}
              />
              <label
                htmlFor="password"
                className="input-label text-xl font-SairaStencil font-extralight text-gray-600"
              >
                Password
              </label>
              <i></i>
              <span
                className="size-[50px] absolute z-30 top-4 left-[90%] text-center py-1.5 cursor-pointer"
                onClick={(e) => showPassword(inputShowPassword, e)}
              >
                <FaEyeSlash size={"1.4rem"} color={"white"} />
              </span>
            </div>

            <div className="w-125 min-w-75 h-17.5 inputbox">
              <input
                required
                type="password"
                className="text-xs text-white font-Sekuya"
                autoComplete="off"
                placeholder="Mr/Mrs Magic Words confirmation"
                id="confirm-password"
                ref={inputShowConfirmPassword}
                onBlur={(e) => inputChecks(e)}
              />
              <label
                htmlFor="confirm-password"
                className="input-label text-xl font-SairaStencil font-extralight text-gray-600"
              >
                Confirm Password
              </label>
              <i></i>
              <span
                className="size-[50px] absolute z-30 top-4 left-[90%] text-center py-1.5 cursor-pointer"
                onClick={(e) => showPassword(inputShowConfirmPassword, e)}
              >
                <FaEyeSlash size={"1.4rem"} color={"white"} />
              </span>
            </div>

            <div className="w-125 min-w-75 h-20! flex flex-col">
              <input
                type="submit"
                value="Sign UP"
                className="w-full h-15 border-b-2 border-b-gray-500 border-transparent outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
              />
            </div>
          </form>

          <div className="w-full h-62.5 grid grid-cols-2 justify-items-center">
            <div className="w-50 h-15">
              <button
                className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
              >
                Test
              </button>
            </div>

            <div className="w-50 h-15">
              <button
                className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
              >
                Test
              </button>
            </div>

            <div className="w-[80%] h-15 col-span-2">
              <button
                className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
              >
                Test
              </button>
            </div>

            <div className="w-[80%] h-15 col-span-2">
              <button
                className=" w-full h-12.25 border-b-2 border-transparent border-b-gray-500 outline-0 hover:border-2 hover:rounded-4xl 
                            hover:border-gray-500 text-sm font-Sekuya transition-all transition-discrete delay-150 duration-200 ease-in-out cursor-pointer"
              >
                Test
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 relative rounded-4xl z-10">
          <div className="w-full h-75 flex items-center text-center gap-5 row-span-2">
            <h2 className="text-xl font-SuperSlice text-white">
              I Gotta work, continue grinding and staying restless. all
              sleepless night camped in the dark need to light up the future
              bright with burning ambitious
            </h2>
            {/* gonna search up some text styling later */}
          </div>

          <div
            className="w-[100px] h-[90px] bg-white ml-auto flex items-center justify-center relative rounded-bl-[55px]
                    after:size-[40px] after:absolute after:top-0 after:right-full after:bg-red-400
                after:content-[''] after:rounded-[50%] after:shadow-[20px_-15px_blue] 
                    before:size-[40px] before:absolute before:top-[100%] before:right-0 before:-bg-red-400
                before:content-[''] before:rounded-[50%] before:shadow-[20px_-15px_blue]"
          >
            <span className="size-[60px] rounded-[50%] flex items-center justify-center bg-red-600">
              X
            </span>
            {/* the button will be styled as a blobs wavy */}
          </div>

          <div className="w-[300px] h-full ml-auto relative">
            {/* <a href="">TERMS & CONDITIONS</a> */}
            <div className=" w-[400px] h-[100px] -rotate-90 absolute top-[50%] translate-x-[50px]">
              <img
                src="train-header-right.png"
                alt="train-photo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* I will get some generated pics of a train harboring the words Terms & Conditions and align it horizontally */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
