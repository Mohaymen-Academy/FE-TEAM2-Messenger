import React from "react";

const PhoneNumberInput = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        ref={inputRef}
        id={inputID}
        type={type}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className="m-0"
      />

      <Dropdown items={items} />
    </div>
  );
};

export default PhoneNumberInput;
