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

export type getMessageParamsType = {
  chatId: string;
  floor: string | number;
  ceil: string | number;
};

export type CreateContactType = {
  contactId: number;
  firstName: string;
  lastName: string;
};
