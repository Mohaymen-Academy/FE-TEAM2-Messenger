import Input from "@/components/auth/input/Input";
import { Paragraph } from "@/components/ui";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import React, { useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface channelPrivacyProps {
  setValue: UseFormSetValue<FieldValues>;
}

const ChannelPrivacy: React.FC<channelPrivacyProps> = ({ setValue }) => {
  const [channelType, setChannelType] = useState("public");

  const handleChannelTypeChange = (newType: "private" | "public") => {
    setChannelType(newType);
    setValue("public", newType === "public" ? true : false);
  };

  return (
    <div className="mb-7">
      <HoverWrapper
        onClick={() => handleChannelTypeChange("public")}
        className="p-3 flex-col items-start"
      >
        <label className="cursor-pointer flex items-center">
          <Input
            type="radio"
            name="channelType"
            value="public"
            checked={channelType === "public"}
            className="w-5 h-5"
          />
          <Paragraph>عمومی</Paragraph>
        </label>
        <Paragraph size="xs" className="!text-secondary mx-3">
          به کانال های خصوصی می توان از طریق سرچ دسترسی داشت و هرکسی می تواند به
          آن ها ملحق شود.
        </Paragraph>
      </HoverWrapper>
      <HoverWrapper
        className="p-3 flex-col items-start"
        onClick={() => handleChannelTypeChange("private")}
      >
        <label className="cursor-pointer flex items-center">
          <Input
            type="radio"
            name="channelType"
            value="private"
            checked={channelType === "private"}
            className="w-5 h-5"
          />
          <Paragraph>خصوصی</Paragraph>
        </label>
        <Paragraph size="xs" className="!text-secondary mx-3">
          به کانال های خصوصی فقط می توان از طریق لینک ملحق شد.
        </Paragraph>
      </HoverWrapper>
    </div>
  );
};

export default ChannelPrivacy;
