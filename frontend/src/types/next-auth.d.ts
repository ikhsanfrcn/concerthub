import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role?: ORGANIZER | CUSTOMER;
    };
    accessToken?: string;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role?: ORGANIZER | CUSTOMER;
    accessToken?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role?: ORGANIZER | CUSTOMER;
    accessToken?: string;
  }
}
