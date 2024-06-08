export const openURLInNewTab = (url: string) => {
  if (url) {
    window.open(url, "_blank");
  }
};
