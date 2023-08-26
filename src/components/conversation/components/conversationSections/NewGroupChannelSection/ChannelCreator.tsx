import SectionHeader from "@/components/profile/components/SectionHeader";
import SectionContainer from "@/components/profile/components/SectionContainer";
import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import ProfileUploader from "@/components/wrappers/FileUploader";
import { useRef, useState } from "react";
import ChatPrivacy from "../../ChannelPrivacy";
import { StoreStateTypes } from "@/utils/types";
import { setProfileImageURL } from "@/redux/Slices/appSlice";
import { onCropperOpen } from "@/redux/Slices/modalSlice";

interface ChannelCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
  setValue: UseFormSetValue<FieldValues>;
  setGroupProfileFormData: any;
}

const ChannelCreator: React.FC<ChannelCreatorProp> = ({
  show,
  register,
  onSubmit,
  setValue,
  setGroupProfileFormData,
}) => {
  const dispatch = useDispatch();
 

  const { profileImageURL } = useSelector(
    (store: StoreStateTypes) => store.app
  );

  const [_, setFormData] = useState(new FormData());

  const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      setGroupProfileFormData(formData);
      setFormData(formData);

      const imageUrl = URL.createObjectURL(file);
      dispatch(setProfileImageURL(imageUrl))
      dispatch(onCropperOpen());
    }
  };

  

  return (
    <FadeMotionWrapper show={show}>
      <SectionContainer className="flex flex-col gap-10">
        <SectionHeader title="کانال جدید" />

        {/* Camera and Upload section */}
        <div className="px-8 flex flex-col">
          <ProfileUploader
            imgUrl={profileImageURL}
            width={150}
            accept="image/*"
            imageSelectHandler={imageSelectHandler}
            className="mb-10 mx-auto"
          />
          <div className="flex flex-col gap-4 mb-6">
            <FloatingLabelInput
              type="text"
              label="نام کانال"
              formId="channelName"
              required
              register={register}
              onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : "")}
            />

            <FloatingLabelInput
              label="توضیحات (اختیاری)"
              type="text"
              formId="channelBio"
              register={register}
              onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : "")}
            />
          </div>

          <ChatPrivacy setValue={setValue} />

          <div className="flex gap-2">
            <Button
              onClick={() => {
                onSubmit();
              }}
              className="w-full font-bold text-xl"
            >
              <span className="sr-only">ساخت کانال</span>
              ساخت کانال
            </Button>
            <Button
              onClick={() => {
                dispatch(setSection({ selectedState: "conversations" }));
                dispatch(setProfileImageURL(""));
              }}
              className="!bg-btn-danger !text-white hover:!bg-btn-danger-hover w-full font-bold text-xl"
            >
              <span className="sr-only">انصراف</span>
              انصراف
            </Button>
          </div>
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default ChannelCreator;
