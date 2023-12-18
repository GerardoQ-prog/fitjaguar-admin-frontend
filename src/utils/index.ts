export const convertFileToImageBase64 = (
  file: any,
  fn?: (event: any) => void
) => {
  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      fn && fn(event.target?.result);
    };

    reader.readAsDataURL(file);
  }
};

export const convertTextToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const convertSecondstoMinutesAndSeconds = (seconds: number) => {
  var minutos = Math.floor(seconds / 60);
  var segundosRestantes = seconds % 60;

  return minutos + ":" + segundosRestantes;
};
