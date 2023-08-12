import React from "react";
import SectionHeader from "./components/SectionHeader";
import SectionContainer from "./components/SectionContainer";
import { TbCameraPlus } from "react-icons/tb";
import FloatingLabelInput from "../auth/input/FloatingLabelInput";
import ProfileImage from "../ui/ProfileImage";

const GroupCreator = () => {
  return (
    <SectionContainer className="gap-20 flex flex-col">
      <SectionHeader title="گروه جدید" />

      {/* Camera and Upload section */}
    <ProfileImage/>

      <FloatingLabelInput
        label="نام گروه"
        type="tel"
        inputID="group-name"
        borderWidth={55}
        className="mx-10"
        dir="rtl"
      />
    </SectionContainer>
  );
};

export default GroupCreator;
