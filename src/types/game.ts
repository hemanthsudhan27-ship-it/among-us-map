export type Coordinate = {
  x: number;
  y: number;
};

export type Task = {
  id: string;
  name: string;
  floor: 1 | 2;
  x: number;
  y: number;
  completed: boolean;
};
