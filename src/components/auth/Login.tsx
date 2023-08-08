import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Paragraph from "../ui/paragraph/Paragraph";

const Login = () => {
  const navigate = useNavigate();
  return (
    <form className="dark:text-white flex flex-col gap-4 justify-center items-center bg-green-500/80 backdrop-blur-sm px-10 py-6 rounded-2xl dark:bg-slate-900">
      <Paragraph className="text-4xl">پیام رسان مرام</Paragraph>
      <Paragraph className="text-lg">وارد شدن به حساب کاربری</Paragraph>
      <div className="flex flex-col gap-4">
        <input id="userMail" type="text" placeholder="Email or Username" />
        <input id="password" type="password" placeholder="Password" />
      </div>
      <Button
        onClick={() => {
          navigate("/chat");
        }}
        size="lg"
      >
        ورود
      </Button>
      <Paragraph className="text-sm">
        حساب کاربری نداری داداش ؟
        <Button
          onClick={() => navigate("/auth/sign-up")}
          size="sm"
          variant="link"
        >
          ثبت نام
        </Button>
      </Paragraph>
    </form>
  );
};

export default Login;
