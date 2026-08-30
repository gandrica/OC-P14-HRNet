export const formatMyDate = (dateInput) => {
  if (!dateInput) return "";
  const date = new Date(dateInput);

  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
