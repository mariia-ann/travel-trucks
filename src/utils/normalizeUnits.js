export const normalizeUnits = (value) => {
  if (!value) return value;
  return value.replace(/(\d)([a-zA-Z])/g, "$1 $2");
};