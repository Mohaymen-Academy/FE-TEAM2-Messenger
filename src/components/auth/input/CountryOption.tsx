import React from "react";
import CountryFlag from "react-country-flag";

interface countryOptionProps {
  innerProps: any;
  label: any;
  data: any;
}

const CountryOption: React.FC<countryOptionProps> = ({
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
