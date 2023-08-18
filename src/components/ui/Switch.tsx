interface switchProps {
  isChecked: boolean;
  onClick: () => void;
}

const Switch: React.FC<switchProps> = ({ isChecked, onClick }) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center h-fit justify-between w-fit relative">
        <div className="relative">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            className="sr-only"
            onClick={onClick}
          />
          <div
            className={`box block h-6 w-10 rounded-full ${
              isChecked ? "bg-blue-700 dark:bg-cyan-500" : "bg-slate-500"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switch;
