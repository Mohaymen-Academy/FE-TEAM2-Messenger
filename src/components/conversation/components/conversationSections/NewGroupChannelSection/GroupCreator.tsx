import SectionHeader from "../../../../profile/components/SectionHeader";
import SectionContainer from "../../../../profile/components/SectionContainer";
import FloatingLabelInput from "../../../../auth/input/FloatingLabelInput";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ProfileUploader from "@/components/wrappers/FileUploader";
import ChatPrivacy from "../../ChannelPrivacy";

interface GroupCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
  setValue: UseFormSetValue<FieldValues>;
}

const GroupCreator: React.FC<GroupCreatorProp> = ({
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
      <SectionContainer className="gap-10 flex flex-col">
        <SectionHeader title="گروه جدید" />

        {/* Camera and Upload section */}
        <div className="px-8 flex flex-col">
          <ProfileUploader
            imgUrl={pictureUrl}
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
          />

          <ChatPrivacy setValue={setValue} />

          <div className="flex gap-2">
            <Button
              onClick={() => onSubmit()}
              className="w-full font-bold text-xl"
            >
              ساخت گروه
            </Button>
            <Button
              onClick={() =>
                dispatch(setSection({ selectedState: "conversations" }))
              }
              className="!bg-btn-danger hover:!bg-btn-danger-hover !text-white w-full font-bold text-xl"
            >
              انصراف
            </Button>
          </div>
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default GroupCreator;
