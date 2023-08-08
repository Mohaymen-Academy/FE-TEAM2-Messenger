import { User } from "@/utils/types";
import React from "react";

type CreatePvSectionProps = {
  users: User[];
};

type UserItemProps = {
  users: User[];
};

const UserItem: React.FC<UserItemProps> = () => {};

const CreatePvSection: React.FC<CreatePvSectionProps> = ({ users }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full">search bar goes here</div>
      <div className="w-full h-full">
        {users.map((user) => (
          <userItem />
        ))}
      </div>
    </div>
  );
};

export default CreatePvSection;
