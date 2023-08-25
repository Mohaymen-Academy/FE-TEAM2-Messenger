function formatDateDifference(isoDate?: string): string {
  if (!isoDate) return "نامشخص";
  const now = new Date();
  const inputDate = new Date(isoDate);

  const timeDifference = now.getTime() - inputDate.getTime();
  if (timeDifference < 60 * 1000) {
    return `Online`;
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutes = Math.floor(timeDifference / (60 * 1000));
    return `${minutes} دقیقه پیش`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    return `${hours} ساعت پیش`;
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return `${days} روز پیش`;
  } else {
    const formattedDate = inputDate.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return `${formattedDate.replace(/\//g, "/")}`;
  }
}

function formatDateToShamsiYear(isoDate: string): string {
  const inputDate = new Date(isoDate);
  const formattedDate = inputDate.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return `${formattedDate.replace(/\//g, "/")}`;
}

function formatDateToTime(isoDate: string): string {
  const inputDate = new Date(isoDate);
  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export { formatDateDifference, formatDateToShamsiYear, formatDateToTime };
