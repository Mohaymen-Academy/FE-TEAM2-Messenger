import { TbCameraPlus } from "react-icons/tb";

import SectionHeader from "@/components/profile/components/SectionHeader";
import SectionContainer from "@/components/profile/components/SectionContainer";
import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";

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
      <SectionContainer className="gap-10 flex flex-col ">
        <SectionHeader title="کانال جدید" />

        {/* Camera and Upload section */}
        <div className="mx-auto w-[200px] h-[200px] rounded-full bg-cyan-400 flex justify-center items-center cursor-pointer group">
          <TbCameraPlus
            className="text-white group-hover:scale-90 transition-all duration-300"
            size={120}
          />
        </div>

        <div>
          <FloatingLabelInput
            label="نام کانال"
            type="tel"
            inputID="group-name"
            borderWidth={55}
            className="mx-10"
            dir="rtl"
            formId="channelName"
            required
            register={register}
          />

          <FloatingLabelInput
            label="توضیحات (اختیاری)"
            type="tel"
            inputID="group-name"
            borderWidth={120}
            className="mx-10"
            dir="rtl"
            formId="channelBio"
            register={register}
          />
        </div>
        <div className="mx-10 flex gap-2">
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
            className="!bg-btn-secondary w-full font-bold text-xl"
          >
            انصراف
          </Button>
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default ChannelCreator;
