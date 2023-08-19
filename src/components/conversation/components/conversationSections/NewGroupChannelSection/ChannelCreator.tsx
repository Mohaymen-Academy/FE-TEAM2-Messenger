import SectionHeader from "@/components/profile/components/SectionHeader";
import SectionContainer from "@/components/profile/components/SectionContainer";
import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import ProfileUploader from "@/components/wrappers/FileUploader";
import { useState } from "react";
import ChannelPrivacy from "../../ChannelPrivacy";

interface ChannelCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
  setValue: UseFormSetValue<FieldValues>;
}

const ChannelCreator: React.FC<ChannelCreatorProp> = ({
  show,
  register,
  onSubmit,
  setValue,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(new FormData());
  const [pictureUrl, setPictureUrl] = useState("");

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
    <FadeMotionWrapper show={show}>
      <SectionContainer className="flex flex-col gap-10">
        <SectionHeader title="کانال جدید" />

        {/* Camera and Upload section */}
        <div className="px-8 flex flex-col">
          <ProfileUploader
            imgUrl={pictureUrl}
            width={150}
            accept="image/*"
            imageSelectHandler={imageSelectHandler}
            className="mb-10 mx-auto"
          />

          <div className="flex flex-col gap-4 mb-4">
            <FloatingLabelInput
              type="text"
              label="نام کانال"
              formId="channelName"
              required
              register={register}
            />

            <FloatingLabelInput
              label="توضیحات (اختیاری)"
              type="text"
              formId="channelBio"
              register={register}
            />
          </div>

          <ChannelPrivacy setValue={setValue} />

          <div className="flex gap-2">
            <Button
              onClick={() => onSubmit()}
              className="w-full font-bold text-xl"
            >
              ساخت کانال
            </Button>
            <Button
              onClick={() =>
                dispatch(setSection({ selectedState: "conversations" }))
              }
              className="!bg-btn-danger hover:!bg-btn-danger-hover w-full font-bold text-xl"
            >
              انصراف
            </Button>
          </div>
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default ChannelCreator;
