import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-gray-400 p-16 rounded-2xl">
      <p className="text-3xl">پیام رسان مرام</p>
      <p className="text-lg pb-2">وارد شدن به حساب کاربری</p>
      <div className="flex flex-col gap-2">
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
      <p className="text-sm py-2 ">
        حساب کاربری نداری داداش ؟
        <Button size="sm" variant="link">
          ثبت نام
        </Button>
      </p>
    </div>
  );
};

export default Login;
