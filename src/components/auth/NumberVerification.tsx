import { Paragraph } from "../ui";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ConfirmationInput from "./input/ConfirmationCodeInput";

const NumberVerification = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-screen flex flex-col items-center gap-3">
        <Paragraph size="2xl" className="!text-black dark:!text-white">
          پیام رسان آیریس
        </Paragraph>
        <div className="flex flex-col gap-6 justify-center items-center rounded-2xl py-10 px-6 backdrop-blur-md bg-gradient-to-r from-green-/40 to-green-300 dark:bg-gray-700 w-11/12 max-w-[580px] ">
          <header className="mx-auto">
            <Paragraph size="sm" className="!text-cyan-500">
              ورود به حساب کاربری
            </Paragraph>
          </header>
          <div className='flex'>
            <ConfirmationInput length={5}/>
            

          </div>
          <Button
            onClick={() => {
              navigate("../register");
            }}
            size="lg"
            className="text-white w-full"
          >
            تایید کد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NumberVerification;
