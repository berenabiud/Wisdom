export type Testimonial = {
  id: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
  date: string;
};

export interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
}