export const isFilled = (value?: string) => {
  return value && `${value}`.trim() !== "";
};
