import Button from "../ui/button/Button";

const SignUp = () => {
  return (
    <form className="flex flex-col gap-4 justify-center items-center bg-teal-400 p-16 rounded-2xl">
      <p className="text-3xl">پیام رسان مرام</p>
      <p className="text-xl">ایجاد حساب کاربری</p>
      <div className="flex flex-col gap-2">
        <input id="email" type="email" placeholder="Email" />
        <input id="username" placeholder="Username" />
        <input id="password" type="password" placeholder="Password" />
      </div>

      <Button>ثبت نام</Button>

      <Button>ثبت نام با حساب گوگل</Button>
      <p className="text-sm py-2 ">
        حساب کاربری دارید ؟
        <Button variant="link" size="sm">
          وارد شوید
        </Button>
      </p>
    </form>
  );
};

export default SignUp;
