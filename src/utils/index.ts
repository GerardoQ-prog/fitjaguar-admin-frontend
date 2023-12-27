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

export const capitalizeFullName = (fullName: string) => {
  const words = fullName.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

export const generateCode = (name: string, amount: string): string => {
  const codeBase = name.replace(/\s+/g, "").toUpperCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  const code = codeBase + randomNumber.toString() + amount;
  return code;
};

export const getHoursAndMinutes = (dateFormat: string) => {
  const date = new Date(dateFormat);
  const localHours = date.getHours();
  const localMinutes = date.getMinutes();
  return `${localHours}:${localMinutes}`;
};

export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
