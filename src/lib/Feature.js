const Feature = (url = "") => {
  const filetext = url.split(".").pop().toLowerCase();

  if (filetext === "mp4" || filetext === "webm" || filetext === "ogg")
    return "video";
  if (filetext === "mp3" || filetext === "wav") return "audio";
  if (
    filetext === "png" ||
    filetext === "jpg" ||
    filetext === "jpeg" ||
    filetext === "gif"
  )
    return "image";

  return "file";
};

const transformImage = (url = "", width = 100) => url;

export { Feature, transformImage };
