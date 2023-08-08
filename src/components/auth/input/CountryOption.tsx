import React from "react";
import CountryFlag from "react-country-flag";

interface coutnryOptionProps {
  innerProps: string;
  label: string;
  data: string;
}

const CountryOption: React.FC<coutnryOptionProps> = ({
  innerProps,
  label,
  data,
}) => (
  <div {...innerProps} className="flex items-center">
    <CountryFlag
      countryCode={data.countryCode}
      svg
      style={{ marginRight: "8px" }}
    />
    {label}
  </div>
);

export default CountryOption;
