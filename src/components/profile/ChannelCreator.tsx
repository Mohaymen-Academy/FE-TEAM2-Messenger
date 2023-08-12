import SectionHeader from "./components/SectionHeader";
import SectionContainer from "./components/SectionContainer";
import { TbCameraPlus } from "react-icons/tb";
import FloatingLabelInput from "../auth/input/FloatingLabelInput";
import FadeMotionWrapper from "../wrappers/FadeMotionWrapper";

interface ChannelCreatorProp {
  show: boolean;
}
const ChannelCreator: React.FC<ChannelCreatorProp> = ({ show }) => {
  return (
    <FadeMotionWrapper show={show}>
      <SectionContainer className="gap-20 flex flex-col">
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
          />

          <FloatingLabelInput
            label="توضیحات (اختیاری)"
            type="tel"
            inputID="group-name"
            borderWidth={120}
            className="mx-10"
            dir="rtl"
          />
        </div>
      </SectionContainer>
    </FadeMotionWrapper>
  );
};

export default ChannelCreator;
