import type { ActionState } from './utils/to-action-state';

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

const FieldError = ({ actionState, name }: FieldErrorProps) => {
  const message = actionState.fieldErrors[name]?.[0];

  if (!message) return null;
  return <span className="text-xs text-destructive">{actionState.fieldErrors[name]?.[0]}</span>;
};

export { FieldError };
