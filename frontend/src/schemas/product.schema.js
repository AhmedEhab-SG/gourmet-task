import { z } from "zod";

// This is a schema for the client side product form will use it with the hookform resolver.

const categories = ["electronics", "clothing", "books"];

const createProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters." })
    .max(50, { message: "name must be at most 50 characters." }),

  description: z
    .string()
    .min(10, { message: "description must be at least 10 characters." }),

  price: z
    .string()
    .min(1, { message: "price must be at least 1." })
    .refine((value) => !isNaN(Number(value)), {
      message: "price must be a vaild number.",
    }),

  category: z.enum(categories, {
    message: "category must be either 'electronics', 'clothing', or 'books'.",
  }),
});

export default createProductSchema;
export { categories };
