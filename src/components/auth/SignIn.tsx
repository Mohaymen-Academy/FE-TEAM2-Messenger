import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
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
    <div className="w-screen flex flex-col items-center gap-3">
      {/* <img className="h-48 p-2 bg-gray-100 dark:bg-gray-800 rounded-full" src={Iris}  /> */}
      <Paragraph size="2xl" className="!text-black dark:!text-white">
        پیام رسان آیریس
      </Paragraph>
      <div className="flex flex-col gap-4 justify-center items-center-400 rounded-2xl py-10 px-6 backdrop-blur-md bg-gradient-to-r from-green-/40 to-green-300 dark:bg-gray-700 w-11/12 max-w-[580px] ">
        <header className="mx-auto">
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
            navigate("../../auth/numberVerification");
          }}
          size="lg"
          className="text-white"
        >
          دریافت کد تایید
        </Button>
      </div>
    </div>
  );
};

export default Login;
