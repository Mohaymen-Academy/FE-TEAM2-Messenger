import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import { FcGoogle } from "react-icons/fc";
import Paragraph from "../ui/paragraph/Paragraph";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <form className="dark:text-white flex flex-col gap-3 justify-center items-center bg-gray-400/60 backdrop-blur-sm  rounded-2xl px-16 py-6">
      <Paragraph className="text-3xl">پیام رسان مرام</Paragraph>
      <Paragraph className="text-xl">ایجاد حساب کاربری</Paragraph>
      <div className="flex flex-col gap-4">
        <input id="email" type="email" placeholder="Email" />
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
      </div>

      <Button>ثبت نام</Button>

      <Button className="flex gap-2">
        ثبت نام با حساب گوگل <FcGoogle />{" "}
      </Button>

      <Paragraph className="text-sm ">
        حساب کاربری دارید ؟
        <Button
          onClick={() => {
            navigate("/auth/login");
          }}
          variant="link"
          size="sm"
        >
          وارد شوید
        </Button>
      </Paragraph>
    </form>
  );
};

export default SignUp;
