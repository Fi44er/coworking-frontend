export interface IRoomResponse {
  id: number;
  address: string;
  name: string;
  description: string;
  price: number;
  places: number;
  weekDays: string[];
  timeStart: Date;
  timeEnd: Date;
  picture: { name: string }[];
}
