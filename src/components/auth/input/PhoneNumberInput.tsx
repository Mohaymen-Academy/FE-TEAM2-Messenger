import React from "react";
import Select from "react-select";
import Input from "./Input";
import CountryOption from "./CountryOption";

const countryOptions = [
  { value: "+1", label: "United States (+1)", countryCode: "IR" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+91", label: "India (+91)" },
  // Add more country options here
];

const PhoneNumberInput = (
  {
    //   phoneNumber,
    //   setPhoneNumber,
    //   selectedCountry,
    //   setSelectedCountry,
  }
) => {
  return (
    <div className="flex items-center">
      <label htmlFor="phoneNumber" className="mr-2">
        Phone Number:
      </label>
      <div className="flex items-center">
        <Select
          options={countryOptions}
          //   value={selectedCountry}
          //   onChange={setSelectedCountry}
          components={{ Option: CountryOption }}
          className="w-32 mr-2"
        />
        <Input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="شماره تلفن خود را وارد کنید"
          //   value={phoneNumber}
          //   onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
