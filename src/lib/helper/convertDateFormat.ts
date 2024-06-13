export const formatDate = (dateString: string | null): string => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return new Intl.DateTimeFormat("en-US", options).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};
