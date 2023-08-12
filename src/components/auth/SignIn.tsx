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

import Button from "../ui/Button";
import Paragraph from "../ui/Paragraph";
import FloatingLabelInput from "./input/FloatingLabelInput";
// import PhoneNumberInput from "./input/PhoneNumberInput";
import Dropdown from "./input/DropDown";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginApi } from "@/services/api/authentication";
import { toast } from "react-toastify";

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
  // const navigate = useNavigate();
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
      const { data: loginData } = await loginApi(phoneNumber);

      console.log(loginData);

      //save tokens to local storage
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);

      // //save user info to redux accessible globally
      // dispatch(
      //   userSlice.actions.setUserInfoByRequest({
      //     email,
      //     id,
      //     username,
      //     firstname,
      //     lastname,
      //     phone,
      //     profile_url,
      //   })
      // );

      toast("خوش آمدید");
      // navigate("/");
    } catch (error: any) {
      console.log(error);
      if (error.message === "Network Error")
        toast.error(
          "مشکلی پیش آمده است، لطفا دوباره تلاش کنید یا اتصال اینترنت خود را بررسی نمایید"
        );
      toast.error("ورود ناموفق، لطفا دوباره تلاش کنید");
    }
  };

  return (
    <div className="w-screen flex flex-col items-center">
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
          type="number"
          borderWidth={75}
          label="شماره تلفن"
          dropDown
          register={register}
          formId="phoneNumber"
          required
        >
          <Dropdown items={countries} />
        </FloatingLabelInput>

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
