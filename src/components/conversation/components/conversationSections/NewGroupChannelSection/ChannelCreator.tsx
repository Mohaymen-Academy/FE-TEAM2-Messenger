import SectionHeader from "@/components/profile/components/SectionHeader";
import SectionContainer from "@/components/profile/components/SectionContainer";
import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import ProfileImage from "@/components/ui/ProfileImage";

interface ChannelCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
}
const ChannelCreator: React.FC<ChannelCreatorProp> = ({
  show,
  register,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  return (
    <FadeMotionWrapper show={show}>
      <SectionContainer className="flex flex-col gap-10">
        <SectionHeader title="کانال جدید" />

        {/* Camera and Upload section */}
        <div className="px-8 flex flex-col gap-8">
          <ProfileImage width={150} />

          <div className="flex flex-col gap-4">
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
