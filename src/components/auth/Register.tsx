import FloatingLabelInput from "./input/FloatingLabelInput";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../wrappers/FileUploader";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

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

      // const { data: registerData } = await registerApi({...});
      ///sen to server logic here
      navigate("/chat");

      toast.success("اطلاعات با موفقیت ذخیره شد");
    } catch (error: any) {
      console.log(error);
      if (error.message === "Network Error")
        toast.error(
          "مشکلی پیش آمده است، لطفا دوباره تلاش کنید یا اتصال اینترنت خود را بررسی نمایید"
        );
      toast.error("اطلاعات ذخیره نگردید، مشکلی به وجود آمده است");
    }
  };

  return (
    <div className="dark w-full h-full gap-5 flex flex-col items-center bg-primary p-8 rounded-2xl">
      <ProfileUploader setImage={setValue} width={150} accept="image/*" />

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <FloatingLabelInput
            type="text"
            register={register}
            required
            formId="fName"
            label="نام"
            borderWidth={10}
          />
          <FloatingLabelInput
            register={register}
            type="text"
            formId="lName"
            label="نام خانوادگی"
          />
        </div>
        <FloatingLabelInput
          register={register}
          type="text"
          formId="bio"
          label="درباره خود"
        />
      </div>
      <Button onClick={handleSubmit(onSubmit)} className="w-full">
        تایید
      </Button>
    </div>
  );
};

export default Register;
