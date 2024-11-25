import { ZodError } from 'zod';

export type ActionState = {
  status?: 'SUCCESS' | 'ERROR';
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
  if (error instanceof ZodError) {
    // if Zod validation fails, return the first error message
    return {
      status: 'ERROR',
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // if a different error occurs (i.e., a database error), return the error message
    return {
      status: 'ERROR',
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  } else {
    // if something else goes wrong, return a generic error message
    // if not an error instance but something else crashes
    return {
      status: 'ERROR',
      message: 'An unknown error occurred.',
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (status: ActionState['status'], message: string): ActionState => {
  return { status, message, fieldErrors: {}, timestamp: Date.now() };
};
