import FloatingLabelInput from "./input/FloatingLabelInput";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../wrappers/FileUploader";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { sendPicture } from "@/services/api/authentication";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import axios from "axios";
import apiCall from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import useToastify from "@/hooks/useTostify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(new FormData());
  const [pictureUrl, setPictureUrl] = useState("");

  const user = useSelector((store: StoreStateTypes) => store);
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      profilePicture: new FormData(),
      fName: "",
      lName: "",
      bio: "",
    },
  });

  const file = watch("profilePicture");
  console.log(file);

  const toastify = useToastify();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { profilePicture, fName, lName, bio } = data;
    try {
      const data = await sendPicture(formData);

      // const { data: uploadResponse } = await axios.post(
      //   `https://api.escuelajs.co/api/v1/files/upload`,
      //   profilePicture,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //     onUploadProgress: function (progressEvent) {
      //       if (!progressEvent.total) return;
      //       var percentCompleted = Math.round(
      //         (progressEvent.loaded * 100) / progressEvent.total
      //       );
      //       console.log(percentCompleted);
      //     },
      //   }
      // );
      console.log(data);

      ///sen to server logic here
      // navigate("/chat");

      toastify.success("اطلاعات با موفقیت ذخیره شد");
    } catch (error: any) {
      if (error.message === "Network Error")
        toastify.error(
          "مشکلی پیش آمده است، لطفا دوباره تلاش کنید یا اتصال اینترنت خود را بررسی نمایید"
        );
      toastify.error("اطلاعات ذخیره نگردید، مشکلی به وجود آمده است");
    }
  };

  const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      setFormData(formData);

      const imageUrl = URL.createObjectURL(file);
      setPictureUrl(imageUrl);
    }
  };

  return (
    <div className="dark w-full h-full flex flex-col items-center bg-primary p-8 rounded-2xl">
      <ProfileUploader
        imgUrl={pictureUrl}
        setImage={setValue}
        width={150}
        accept="image/*"
        imageSelectHandler={imageSelectHandler}
      />

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
