import SectionHeader from "../../../../profile/components/SectionHeader";
import SectionContainer from "../../../../profile/components/SectionContainer";
import FloatingLabelInput from "../../../../auth/input/FloatingLabelInput";
import ProfileImage from "../../../../ui/ProfileImage";
import { Button } from "@/components/ui";
import { UseFormRegister, FieldValues } from "react-hook-form";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";

interface GroupCreatorProp {
  show: boolean;
  register: UseFormRegister<FieldValues>;
  onSubmit: any;
}

const GroupCreator: React.FC<GroupCreatorProp> = ({
  show,
  register,
  onSubmit,
}) => {
  const dispatch = useDispatch();

  return (
    <FadeMotionWrapper show={show}>
      <SectionContainer className="gap-10 flex flex-col">
        <SectionHeader title="گروه جدید" />

        {/* Camera and Upload section */}
        <ProfileImage width={150} />

        <FloatingLabelInput
          label="نام گروه"
          type="tel"
          inputID="group-name"
          borderWidth={55}
          className="mx-10"
          dir="rtl"
          register={register}
          required
          formId="groupName"
        />
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

export default GroupCreator;
