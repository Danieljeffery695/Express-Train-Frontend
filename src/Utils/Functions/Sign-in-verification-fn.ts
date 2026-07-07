import { type ReducerAction } from "../../pages/SignUp";

export function sign_in_verification_fn(e: React.FocusEvent<HTMLInputElement>, pwd: React.RefObject<HTMLInputElement | null>): ReducerAction {

    let reducer = {} as ReducerAction;
    switch (e.target.id) {
      case "name": 
        if (e.currentTarget.value == "") {
            reducer = {
                type: "TextType",
                payload: {
                actionErrorMessage: "Sorry input field can't be left empty",
                actionInputTypeErrorSwitch: true,
            },
          };
        } else if (e.currentTarget.value.length < 3 || e.currentTarget.value.length > 15 ) {
            reducer = {
                type: "TextType",
                payload: {
                actionErrorMessage: "Name must be 3 and below 15 character",
                actionInputTypeErrorSwitch: true,
            },
          };
        } else {
            reducer = {
                type: "TextType",
                payload: {
                actionErrorMessage: "All good!!",
                actionInputTypeErrorSwitch: false,
            },
          };
        }
        break;
      case "email":
        if(e.currentTarget.value == "") {
           reducer = {
                type: "EmailType",
                payload: {
                actionErrorMessage: "Sorry input field can't be left empty",
                actionInputTypeErrorSwitch: true,
            },
          };
         } else {
            reducer = {
                type: "EmailType",
                payload: {
                actionErrorMessage: "All good!!",
                actionInputTypeErrorSwitch: false,
            },
          };
        }
        break;
      case "number": { //Add Curly Braces to avoid lexical declaration in case block.

        const phoneNum: number | string = e.currentTarget.value.match(/\D/g) ? "" : +e.currentTarget.value; 
        const phoneNumIntLength = /^\d{7,15}$/.test(phoneNum.toString());
        if (!phoneNum || phoneNumIntLength == false) {
           reducer = {
                type: "NumberType",
                payload: {
                actionErrorMessage: "Not a Valid Phone Number",
                actionInputTypeErrorSwitch: true,
            },
          };
        } else {
           reducer = {
                type: "NumberType",
                payload: {
                actionErrorMessage: "All good!!",
                actionInputTypeErrorSwitch: false,
            },
          };
        }
        break;
      }

      case "password":
        if (e.currentTarget.value == "") {
            reducer = {
                type: "PassWordType",
                payload: {
                actionErrorMessage: "Sorry input field can't be left empty",
                actionInputTypeErrorSwitch: true,
            },
          };
        } else {
            reducer = {
                type: "PassWordType",
                payload: {
                actionErrorMessage: "All good!!",
                actionInputTypeErrorSwitch: false,
            },
          };
        }
        break;
        case "confirm-password":
        if (e.currentTarget.value == "") {
            reducer = {
                type: "ConfirmPassWordType",
                payload: {
                actionErrorMessage: "Sorry input field can't be left empty",
                actionInputTypeErrorSwitch: true,
            },
          };
        } else if(e.currentTarget.value != pwd.current?.value) {
            reducer = {
                type: "ConfirmPassWordType",
                payload: {
                actionErrorMessage: "Confirm password does'nt match password",
                actionInputTypeErrorSwitch: true,
              } 
            }
        } else {
            reducer = {
                type: "ConfirmPassWordType",
                payload: {
                actionErrorMessage: "All good!!",
                actionInputTypeErrorSwitch: false,
            },
          };
        }
        break;
      default:
        console.log("Express Train is the Best!!!");
        break;
    }
    return reducer;
}
