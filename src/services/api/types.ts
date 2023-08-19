export type CreateChannelType = {
  title: string;
  bio: string;
  link: string;
  chatType: "PV" | "CHANNEL" | "GROUP";
  userIds: number[];
  public: boolean;
};

export type NumberVarification = {
  activationCode: string;
  phoneNumber: string;
};
