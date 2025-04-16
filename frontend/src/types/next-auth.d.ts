import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      lastName?: string;
      email: string;
      zipCode?: string;
      state?: string;
      city?: string;
      street?: string;
      houseNumber?: string;
      dob?: string;
      role?: ORGANIZER | CUSTOMER;
    };
    accessToken?: string;
  }

  interface JWT {
    id: string;
    name: string;
    lastName?: string;
    email: string;
    zipCode?: string;
    state?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    dob?: string;
    role?: ORGANIZER | CUSTOMER;
    accessToken?: string;
  }

  interface User {
    id: string;
    name: string;
    lastName?: string;
    email: string;
    zipCode?: string;
    state?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    dob?: string;
    role?: ORGANIZER | CUSTOMER;
    accessToken?: string;
  }
}
