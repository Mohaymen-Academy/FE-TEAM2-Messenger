import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Paragraph from "../ui/paragraph/Paragraph";
import messengerLogo from "../../assets/img/ok.svg"
import { merge } from "@/utils/merge";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      <img className="h-12 w-12" src={messengerLogo} />
      <Paragraph className="text-4xl">پیام رسان آیریس</Paragraph>
      <form
        className={merge(
          "dark:text-white flex flex-col gap-4 justify-center items-center  bg-gradient-to-r from-gray-300 backdrop-blur-sm h-[50%] w-11/12 max-w-2xl rounded-2xl  dark:bg-gradient-to-l dark:from-gray-700 dark:backdrop-blur-sm"
        )}
      >
        <Paragraph className="text-lg dark:text-cyan-700">
          وارد شدن به حساب کاربری
        </Paragraph>
        <div className="flex flex-col gap-4">
          <input className="rounded-xl p-2 w-96" id="userMail" type="text" />
        </div>
        <Button
          className="w-[60%] dark:bg-gray-500 dark:hover:text-cyan-400 dark:hover:bg-cyan-700"
          onClick={() => {
            navigate("/chat");
          }}
          size="lg"
        >
          ورود
        </Button>
      </form>
    </div>
  );
};

export default Login;
