import { useNavigate } from "react-router-dom";
import { Button, Paragraph } from "@/components/ui/";
import FloatingLabelInput from "./input/FloatingLabelInput";
import Dropdown from "./input/DropDown";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginApi } from "@/services/api/authentication";
import { toast } from "react-toastify";
import { setEnteredPhoneNumber } from "@/redux/Slices/userSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   const { phoneNumber } = data;
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { phoneNumber } = data;
    try {
      const { data, status } = await loginApi("0" + phoneNumber);
      console.log(data);

      if (status === 200) {
        dispatch(setEnteredPhoneNumber({ phone: "0" + phoneNumber }));
        navigate("/auth/numberVerification");
      } else {
        throw new Error("ورود ناموفق، لطفا دوباره تلاش کنید");
      }
      toast("کد تایید پیامک گردید");
    } catch (error: any) {
      console.error(error);
      if (error.message === "Network Error")
        toast.error(
          "مشکلی پیش آمده است، لطفا دوباره تلاش کنید یا اتصال اینترنت خود را بررسی نمایید"
        );
      toast.error("ورود ناموفق، لطفا دوباره تلاش کنید");
    }
  };

  return (
    <div className="w-screen flex flex-col items-center gap-3">
      {/* <img className="h-48 p-2 bg-gray-100 dark:bg-gray-800 rounded-full" src={Iris}  /> */}
      <Paragraph size="2xl" className="!text-black dark:!text-white">
        پیام رسان آیریس
      </Paragraph>
      <div className="flex flex-col gap-4 justify-center items-center-400 rounded-2xl py-10 px-6 backdrop-blur-md bg-gradient-to-r from-green-/40 to-green-300 dark:bg-gray-700 w-11/12 max-w-[580px] ">
        <header className="mx-auto">
          <Paragraph size="sm" className="!text-neon-blue">
            ورود به حساب کاربری
          </Paragraph>
        </header>
        <div className="flex justify-between gap-2">
          <FloatingLabelInput
            type="tel"
            label="شماره تلفن"
            dropDown
            register={register}
            formId="phoneNumber"
            required
            className="w-full"
          />
          <Dropdown items={countries} />
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
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
