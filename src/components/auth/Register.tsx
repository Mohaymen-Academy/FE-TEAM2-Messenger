import FloatingLabelInput from "./input/FloatingLabelInput";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../wrappers/FileUploader";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useState, useRef } from "react";
import { sendPicture, updateInfo } from "@/services/api/user";
import useToastify from "@/hooks/useTostify";
import { useMutation } from "react-query";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Register = () => {
  const navigate = useNavigate();
  const toastify = useToastify();
  const [formData, setFormData] = useState(new FormData());
  const [pictureUrl, setPictureUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const sendPictureMutation = useMutation(sendPicture, {
    onError: (error) => {
      toastify.error("متاسفانه عکس ذخیره نگردید لطفا مجددا تلاش فرمایید");
    },
  });

  const setInfoMutation = useMutation(updateInfo, {
    onError: (error) => {
      toastify.error("اطلاعات دخیره نگردید لطفا مجددا تلاش فرمایید");
    },
  });

  const userId = useSelector(
    (store: StoreStateTypes) => store.user.user.userId
  );
  const { register, setValue, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      fName: "",
      lName: "",
      bio: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { fName, lName } = data;
    setLoading(true);

    await Promise.all([
      sendPictureMutation.mutateAsync(formData),
      setInfoMutation.mutateAsync({
        userId: userId,
        firstName: fName,
        lastName: lName,
        bio: undefined,
        email: undefined,
      }),
    ]);
    toastify.success("اطلاعات با موفقیت ذخیره شد");
    navigate("/chat");

    setLoading(false);
  };

  const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      setFormData(formData);

      const imageUrl = URL.createObjectURL(file);
      setPictureUrl(imageUrl);
       setShowCropperModal(true);
    }
  };

    const cropperRef = useRef(null);

    const cropImage = () => {
      if (typeof cropperRef.current.getCroppedCanvas() === "undefined") {
        return;
      }
      const croppedImageBase64 = cropperRef.current
        .getCroppedCanvas()
        .toDataURL();
      // Now you can use this croppedImageBase64 as needed.
    };
  return (
    <div className="dark flex flex-col items-center bg-primary p-8 rounded-2xl">
      <ProfileUploader
        imgUrl={pictureUrl}
        setImage={setValue}
        width={150}
        accept="image/*"
        imageSelectHandler={imageSelectHandler}
      />
      {pictureUrl && (
        <Cropper
          className="aspect-square w-[100%] h-[270px] mt-2"
          ref={cropperRef}
          src={pictureUrl}
        />
      )}

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

      <Button
        isLoading={loading}
        onClick={handleSubmit(onSubmit)}
        className="w-full"
      >
        <span className="sr-only">تایید</span>
        تایید
      </Button>
    </div>
  );
};

export default Register;
