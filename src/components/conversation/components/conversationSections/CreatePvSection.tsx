import { User } from "@/utils/types";
import React from "react";

type CreatePvSectionProps = {
  users: User[];
};

type UserItemProps = {
  user: User;
};

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return <div className="bg-slate-500">{user.name}</div>;
};

const CreatePvSection: React.FC<CreatePvSectionProps> = ({ users }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full">search bar goes here</div>
      <div className="w-full h-full">
        {users.map((user) => (
          <UserItem user={user} />
        ))}
      </div>
    </div>
  );
};

export default CreatePvSection;
