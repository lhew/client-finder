export const compareWith = (subject: string, value?: string) => {
  if (subject && value) {
    return `${subject}`.toLowerCase().includes(`${value}`.toLowerCase());
  }

  return false;
};
