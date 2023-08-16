import ContextItem from "./ContextItem";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDelete, MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Context = () => {
  return (
    <div className="bg-primary w-full flex flex-col items-center p-1 rounded-xl">
      <ContextItem text="ویرایش">
        <HiOutlinePencil className="text-primary" />
      </ContextItem>

      <ContextItem text="کپی">
        <MdOutlineContentCopy className="text-primary" />
      </ContextItem>

      <ContextItem text="انتخاب">
        <AiOutlineCheckCircle className="text-primary" />
      </ContextItem>

      <ContextItem color="danger" text="حذف">
        <MdDelete className="text-red-500" />
      </ContextItem>
    </div>
  );
};

export default Context;
