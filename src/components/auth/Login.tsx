import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import ConfirmationInput from "./input/ConfirmationCodeInput";

// const countries = [
//   {
//     dialCode: "98",
//     country: "IR",
//   },
//   {
//     dialCode: "1",
//     country: "US",
//   },
// ];

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center-400 rounded-2xl py-10 px-6 bg-gray-100 dark:bg-gray-700 w-11/12 sm:max-w-[580px] mx-auto">
      <header className="mx-auto">
        <Paragraph size="2xl" className="!text-white">
          پیام رسان آیریس
        </Paragraph>
        <Paragraph size="sm" className="!text-cyan-500">
          ورود به حساب کاربری
        </Paragraph>
      </header>
      {/* <FloatingLabelInput
        inputID="phone"
        type="tel"
        borderWidth={75}
        label="شماره تلفن"
        dropDown
      >
        <Dropdown items={countries} />
      </FloatingLabelInput> */}

      <ConfirmationInput length={5} />

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
