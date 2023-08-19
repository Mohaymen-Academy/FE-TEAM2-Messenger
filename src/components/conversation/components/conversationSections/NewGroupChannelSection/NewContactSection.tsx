import FloatingLabelInput from "@/components/auth/input/FloatingLabelInput";
import SectionContainer from "@/components/profile/components/SectionContainer";
import SectionHeader from "@/components/profile/components/SectionHeader";
import { Button } from "@/components/ui";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";

const NewContactSection = () => {
  const dispatch = useDispatch();

  return (
    <FadeMotionWrapper show={true}>
      <SectionContainer className="flex flex-col gap-10">
        <SectionHeader title="مخاطب جدید" />
        <div className="px-8 flex flex-col gap-4">
          <FloatingLabelInput type="tel" label="تلفن همراه" required />

          <FloatingLabelInput type="text" label="نام" required />

          <FloatingLabelInput
            type="text"
            label="نام خانوادگی (اختیاری)"
            required
          />

          <div className="flex gap-2">
            <Button
              onClick={() => {
                // onSubmit();
                dispatch(setSection({ selectedState: "conversations" }));
              }}
              className="w-full font-bold text-xl"
            >
              ایجاد مخاطب
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

export default NewContactSection;
