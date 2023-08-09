import Input from "@/components/auth/input/Input";
import { CiSearch } from "react-icons/ci";
const SearchInput = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none dark:text-white">
          <CiSearch size={30} />
        </div>
        <Input
          dir="rtl"
          className="rounded-3xl transition-all duration-300 bg-gray-200 w-full m-0 pr-12"
          placeholder={placeHolder}
        />
      </div>
    </form>
  );
};

export default SearchInput;
