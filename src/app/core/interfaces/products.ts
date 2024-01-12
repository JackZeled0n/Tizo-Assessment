export interface Products {
    id: number;
    name: string;
    status: string;
    category: {
      id: number,
      name: string
    };
  }