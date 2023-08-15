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
        <div className="px-8 flex flex-col gap-8">
          <ProfileImage width={150} />

          <FloatingLabelInput
            type="text"
            label="نام گروه"
            register={register}
            required
            formId="groupName"
          />
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
