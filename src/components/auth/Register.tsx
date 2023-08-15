import FloatingLabelInput from "./input/FloatingLabelInput";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../wrappers/FileUploader";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { sendPicture } from "@/services/api/authentication";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";

const Register = () => {
  const navigate = useNavigate();

  const user = useSelector((store: StoreStateTypes) => store);

  console.log(user);

  const {
    register,
    setValue,
    handleSubmit,
    // formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      profilePicture: new FormData(),
      fName: "",
      lName: "",
      bio: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { profilePicture, fName, lName, bio } = data;
    try {

      console.log(profilePicture, fName, lName, bio);

      console.log(profilePicture);

      const data = await sendPicture(profilePicture, 5);
      console.log(data);
      ///sen to server logic here
      navigate("/chat");

      toast.success("اطلاعات با موفقیت ذخیره شد");
    } catch (error: any) {
      if (error.message === "Network Error")
        toast.error(
          "مشکلی پیش آمده است، لطفا دوباره تلاش کنید یا اتصال اینترنت خود را بررسی نمایید"
        );
      toast.error("اطلاعات ذخیره نگردید، مشکلی به وجود آمده است");
    }
  };

  return (
    <div className="dark w-full h-full flex flex-col items-center bg-primary p-8 rounded-2xl">
      <ProfileUploader setImage={setValue} width={150} accept="image/*" />

      <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-5 my-6">
        <FloatingLabelInput
          type="text"
          register={register}
          required
          formId="fName"
          label="نام"
        />

        <FloatingLabelInput
          register={register}
          type="text"
          formId="lName"
          label="نام خانوادگی"
        />
      </div>

      <Button onClick={handleSubmit(onSubmit)} className="w-full">
        تایید
      </Button>
    </div>
  );
};

export default Register;
