import { z } from 'zod';


export const userValidationSchema = z.object({
  name: z.string().min(1).max(255),
  display_name: z.string().min(1).max(255),
  profile: z.string().max(255).nullable().optional(),
  password: z.string().min(4).max(255),
  email: z.string().email().max(255),  
  permanent_address: z.string().nullable().optional(),
  current_address: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  phone: z.number().positive().nullable().optional(),
  role_id: z.number().positive().nullable().optional(),
  country: z.number(),
  postcode: z.number().positive().nullable().optional(),
  state: z.number().positive().nullable().optional(),
});

export const userTypeValidationSchema = z.object({
  name: z.string(),
  description: z.string().nullable().optional(),
});

export const logInValidationSchema = z.object({
  password: z.string().min(4).max(255),
  email: z.string().email().max(255),  
});



