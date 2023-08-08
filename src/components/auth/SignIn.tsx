// import { useNavigate } from "react-router-dom";
// import Button from "../ui/button/Button";
// import Paragraph from "../ui/paragraph/Paragraph";
// import messengerLogo from "../../assets/img/ok.svg"
// import { merge } from "@/utils/merge";

// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center w-screen h-screen justify-center">
//       <img className="h-12 w-12" src={messengerLogo} />
//       <Paragraph className="text-4xl">پیام رسان آیریس</Paragraph>
//       <form
//         className={merge(
//           "dark:text-white flex flex-col gap-4 justify-center items-center  bg-gradient-to-r from-gray-300 backdrop-blur-sm h-[50%] w-11/12 max-w-2xl rounded-2xl  dark:bg-gradient-to-l dark:from-gray-700 dark:backdrop-blur-sm"
//         )}
//       >
//         <Paragraph className="text-lg dark:text-cyan-700">
//           وارد شدن به حساب کاربری
//         </Paragraph>
//         <div className="flex flex-col gap-4">
//           <input className="rounded-xl p-2 w-96" id="userMail" type="text" />
//         </div>
//         <Button
//           className="w-[60%] dark:bg-gray-500 dark:hover:text-cyan-400 dark:hover:bg-cyan-700"
//           onClick={() => {
//             navigate("/chat");
//           }}
//           size="lg"
//         >
//           ورود
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Login;





import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Paragraph from "../ui/paragraph/Paragraph";
import Input from "./input/Input";
import FloatingLabelInput from "./input/FloatingLabelInput";
import PhoneNumberInput from "./input/PhoneNumberInput";
import Dropdown from "./input/DropDown";

const countries = [
  {
    dialCode: "98",
    country: "IR",
  },
  {
    dialCode: "1",
    country: "US",
  },
];

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center-400 rounded-2xl py-10 px-6 bg-gray-100 dark:bg-gray-700 w-11/12 sm:max-w-[580px] ">
      <header className="mx-auto">
        <Paragraph size="2xl" className="!text-white">
          پیام رسان آیریس
        </Paragraph>
        <Paragraph size="sm" className="!text-cyan-500">
          ورود به حساب کاربری
        </Paragraph>
      </header>

      <FloatingLabelInput
        inputID="phone"
        type="tel"
        borderWidth={75}
        label="شماره تلفن"
        dropDown
      >
        <Dropdown items={countries} />
      </FloatingLabelInput>

      <Button
        onClick={() => {
          navigate("/chat");
        }}
        size="lg"
        className="text-white"
      >
        ورود
      </Button>
      <Paragraph className="mx-auto">
        حساب کاربری نداری داداش ؟
        <Button size="sm" variant="link">
          ثبت نام
        </Button>
      </Paragraph>
    </div>
  );
};

export default Login;

