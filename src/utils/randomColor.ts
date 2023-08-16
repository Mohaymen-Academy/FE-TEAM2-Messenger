const bgColors = [
  "#f59e0b",
  "#84cc16",
  "#10b981",
  "#f97316",
  "#6366f1",
  "#ec4899",
];

export const getRandomColor = () =>
  bgColors[Math.floor(Math.random() * bgColors.length)];
