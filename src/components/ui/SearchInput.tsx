import Input from "@/components/auth/input/Input";
import useToastify from "@/hooks/useTostify";
import { setFileterBy } from "@/redux/Slices/appSlice";
import {
  getChatSearchResult,
  getContactSearchResult,
} from "@/services/api/search";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { RiCloseCircleFill } from "react-icons/ri";

interface searchInputProps {
  placeHolder: string;
  searchIn: "CONVERSATION" | "CONTACT";
}

const SearchInput: React.FC<searchInputProps> = ({ placeHolder, searchIn }) => {
  const [searchParam, setSearchParam] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const toastify = useToastify();
  const dispatch = useDispatch();

  const searchResult = async () => {
    let conversationResult = [];
    if (searchIn === "CONVERSATION") {
      const { data: conversationData } = await getChatSearchResult(searchParam);
      conversationResult = conversationData.map((data: any) => data.chatId);
    }
    const { data: contactData } = await getContactSearchResult(searchParam);
    const contactResult = contactData.map((data: any) => data.contactId);

    const searchResult = [...contactResult, ...conversationResult];
    console.log(searchResult, "chat result");
    if (searchResult.length === 0) {
      toastify.warning("نتیجه ای یافت نشد.");
      dispatch(setFileterBy([]));
    } else {
      dispatch(setFileterBy(searchResult));
    }
  };

  // const searchContactQuery = useQuery(
  //   ["search", searchIn.toLowerCase()],
  //   () => getContactSearchResult(searchParam, searchIn),
  //   {
  //     enabled: false,
  //     retry: false,
  //     onSuccess: (data) => {
  //       if (data.data.length === 0) {
  //         toastify.warning("نتیجه ای یافت نشد.");
  //       } else {
  //         const matches = data.data.map(
  //           (data: {
  //             id: number;
  //             chatId?: number;
  //             contactId?: number;
  //             userId: number;
  //             title: string;
  //           }) => (data.chatId ? data.chatId : data.contactId)
  //         );
  //         dispatch(setFileterBy(matches));
  //       }
  //     },
  //     onError: () => {
  //       toastify.error("مشکلی در جستجو به وجود آمده.");
  //     },
  //   }
  // );

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timerId = setTimeout(() => {
      if (searchParam.trim()) {
        searchResult();
      }
    }, 400);

    setDebounceTimer(timerId);

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [searchParam]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0) {
      setSearchParam(e.target.value);
    } else {
      setSearchParam("");
      dispatch(setFileterBy(undefined));
    }
  };

  const handleClearInput = () => {
    dispatch(setFileterBy(undefined));
    setSearchParam("");
  };

  return (
    <form className="flex items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 right-3 flex items-center pl-3 dark:text-white">
          {searchParam ? (
            <div onClick={handleClearInput} className="hover:cursor-pointer">
              <RiCloseCircleFill size={24} />
            </div>
          ) : (
            <CiSearch size={24} />
          )}
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
