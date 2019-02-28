export interface Employee {
  id: number;
  userId: string;
  jobTitle: string;
  fullName: string;
  preferredName: string;
  employeeCode: string;
  phoneNumber: string;
  emailAddress: string;
  address: Address;
}

export interface Address {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
}
