export const setDate = (OldDate) => {
  const year = OldDate.getFullYear();
  const mounth = OldDate.getMonth() + 1;
  const date = OldDate.getDate();

  return `${year}-${mounth}-${date}`;
};
