import Input from "@/components/auth/input/Input";
import { queryClient } from "@/providers/queryClientProvider";
import { getContactSearchResult } from "@/services/api/search";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";

const SearchInput = ({ placeHolder }: { placeHolder: string }) => {
  const [searchParam, setSearchParam] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  const searchContactQuery = useQuery(
    ["search", "contact"],
    () => getContactSearchResult(searchParam),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timerId = setTimeout(() => {
      if (searchParam) {
        searchContactQuery.refetch();
      }
    }, 700);

    setDebounceTimer(timerId);

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [searchParam]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

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
          value={searchParam}
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};

export default React.memo(SearchInput);
