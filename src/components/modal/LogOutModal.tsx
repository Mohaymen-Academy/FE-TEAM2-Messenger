import { Button, Paragraph } from "../ui";

const LogOutModal = () => {
  return (
    <>
      <div className="bg-primary w-[280px] py-5 px-8 rounded-xl shadow shadow-gray-400">
        <Paragraph className="mb-6 text-center">
          آیا از خروج مطمئن هستید؟
        </Paragraph>
        <div className="flex justify-between gap-3">
          <Button className="w-full  transition-all duration-200 hover:bg-red-500 !bg-btn-danger dark:hover:bg-red-600 !text-white">
            بله
          </Button>
          <Button className="w-full transition-all duration-200">خیر</Button>
        </div>
      </div>
    </>
  );
};

// const LogOutModal = () => {
//   return <Modal body={<LogOutConfirm />} />;
// };

export default LogOutModal;
