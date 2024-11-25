import { ZodError } from 'zod';

export type ActionState = { message: string; payload?: FormData };

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
  if (error instanceof ZodError) {
    // if Zod validation fails, return the first error message
    return {
      message: error.errors[0].message,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // if a different error occurs (i.e., a database error), return the error message
    return {
      message: error.message,
      payload: formData,
    };
  } else {
    // if something else goes wrong, return a generic error message
    // if not an error instance but something else crashes
    return {
      message: 'An unknown error occurred.',
      payload: formData,
    };
  }
};
