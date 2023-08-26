import SectionHeader from "../../../../profile/components/SectionHeader";
import SectionContainer from "../../../../profile/components/SectionContainer";
import FloatingLabelInput from "../../../../auth/input/FloatingLabelInput";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProfileUploader from "@/components/wrappers/FileUploader";
import ChatPrivacy from "../../ChannelPrivacy";
import { setProfileImageURL } from "@/redux/Slices/appSlice";
import { StoreStateTypes } from "@/utils/types";
import { onCropperOpen } from "@/redux/Slices/modalSlice";

interface GroupCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
  setValue: UseFormSetValue<FieldValues>;
  setGroupProfileFormData: any;
}

const GroupCreator: React.FC<GroupCreatorProp> = ({
  show,
  register,
  onSubmit,
  setValue,
  setGroupProfileFormData,
}) => {
  const dispatch = useDispatch();
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

  const { profileImageURL } = useSelector(
    (store: StoreStateTypes) => store.app
  );

  return (
    <>
      <FadeMotionWrapper show={show}>
        <SectionContainer className="gap-10 flex flex-col">
          <SectionHeader title="گروه جدید" />

          {/* Camera and Upload section */}
          <div className="px-8 flex flex-col">
            <ProfileUploader
              imgUrl={profileImageURL}
              width={150}
              accept="image/*"
              imageSelectHandler={imageSelectHandler}
              className="mb-10 mx-auto"
            />

            <FloatingLabelInput
              type="text"
              label="نام گروه"
              register={register}
              required
              formId="groupName"
              onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : "")}
            />

            <ChatPrivacy setValue={setValue} />

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  onSubmit();
                }}
                className="w-full font-bold text-xl"
              >
                <span className="sr-only">ساخت گروه</span>
                ساخت گروه
              </Button>
              <Button
                onClick={() => {
                  dispatch(setSection({ selectedState: "conversations" }));
                  dispatch(setProfileImageURL(""));
                }}
                className="!bg-btn-danger hover:!bg-btn-danger-hover !text-white w-full font-bold text-xl"
              >
                <span className="sr-only">انصراف</span>
                انصراف
              </Button>
            </div>
          </div>
        </SectionContainer>
      </FadeMotionWrapper>
    </>
  );
};

export default GroupCreator;
