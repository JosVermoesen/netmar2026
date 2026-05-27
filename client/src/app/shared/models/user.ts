export type User = {
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  berNumber: string;
  clientNumber: string;
};

export type Address = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};
