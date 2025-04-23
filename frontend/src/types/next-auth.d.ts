import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      state: string;
      phoneNumber: string;
      id: string;
      name: string;
      email: string;
      role?: ORGANIZER | CUSTOMER;
      avatar?: string;
    };
    accessToken?: string;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role?: ORGANIZER | CUSTOMER;
    avatar?: string;
    accessToken?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role?: ORGANIZER | CUSTOMER;
    avatar?: string;
    accessToken?: string;
  }
}
