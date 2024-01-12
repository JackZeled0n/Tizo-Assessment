export interface IProduct {
    id: number;
    name: string;
    active: boolean;
    category: {
      id: number,
      name: string
    };
  }