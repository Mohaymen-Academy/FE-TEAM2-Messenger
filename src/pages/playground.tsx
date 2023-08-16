import { Button } from "@/components/ui";
import { getAllChat } from "@/services/api/chat";
import { StoreStateTypes } from "@/utils/types";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const playground = () => {
  const user = useSelector((store: StoreStateTypes) => store.user.user);

  const onTestButtonClickHandler = async () => {
    // const query = useQuery("todos", getAllChat);
    // const data = await getAllChat();
    // console.log(data);
    // user;
  };
  return (
    <div>
      <Button
        onClick={onTestButtonClickHandler}
        className="w-24 h-12 bg-green-500"
      >
        test user
      </Button>
    </div>
  );
};

export default playground;
