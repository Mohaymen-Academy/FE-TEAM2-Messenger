import CurrentUserProfile from "@/components/profile/CurrentUserProfile";
import { Button } from "@/components/ui";

const playground = () => {
  // const user = useSelector((store: StoreStateTypes) => store.user.user);

  const onTestButtonClickHandler = async () => {
    // const query = useQuery("todos", getAllChat);
    // const data = await getAllChat();
    // console.log(data);
    // user;
  };

  return (
    <div>
      <CurrentUserProfile />
    </div>
  );
};

export default playground;
