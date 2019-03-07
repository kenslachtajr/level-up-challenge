export interface Color {
    id: number;
    color: string;
    category: string;
    type: string;
    code: {
      rgba: [];
      hex: string;
    };
  }