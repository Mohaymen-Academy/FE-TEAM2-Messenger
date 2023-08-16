import { Paragraph } from "../ui";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ConfirmationInput from "./input/ConfirmationCodeInput";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes, User } from "@/utils/types";
import { useState } from "react";
import { numberConfirmation } from "@/services/api/authentication";
import { toast } from "react-toastify";
import { setUser } from "@/redux/Slices/userSlice";
import { QueryClient, useMutation, useQuery } from "react-query";
import useToastify from "@/hooks/useTostify";

const NumberVerification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (store: StoreStateTypes) => store.user.enteredPhoneNumber
  );
  const toastify = useToastify();
  const queryClient = new QueryClient();

  const useNumberConfirmationMutation = () => {
    return useMutation((confirmData: { code: string; phoneNumber: string }) => {
      return numberConfirmation(confirmData.code, confirmData.phoneNumber);
    });
  };

  const { mutate: numberConfirmationMutate } = useNumberConfirmationMutation();

  const submit = async (code: string) => {
    setLoading(true);
    numberConfirmationMutate(
      { code, phoneNumber },
      {
        onSuccess(data, _, __) {
          const { registered, access_token, refresh_token, user } = data.data;
          dispatch(setUser(user));
          window.localStorage.setItem("access_token", access_token);
          window.localStorage.setItem("refresh_token", refresh_token);

          toastify.success("خوش آمدید");

          if (registered) {
            navigate("/auth/register");
          } else {
            navigate("/chat");
          }
        },
        onError(error: any, _, __) {
          console.error(error);
          if (error.request.status === 403) {
            toastify.error("کد وارد شده مورد تایید نمی‌باشد");
          } else {
            toastify.error("مشکلی پیش آمده است، لطفا مجددا تلاش فرمایید");
          }
        },
        onSettled() {
          setLoading(false);
        },
      }
    );
  };
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
          <div className="flex">
            <ConfirmationInput submit={submit} length={5} />
          </div>
          <Button size="lg" className="text-white w-full" isLoading={loading}>
            تایید کد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NumberVerification;
