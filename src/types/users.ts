interface IGeo {
  lat: string;
  lng: string;
}

interface Iaddress {
  city: string;
  street: string;
  geo: IGeo;
  suite: string;
  zipcode: string;
}

interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: ICompany;
  address: Iaddress;
}
