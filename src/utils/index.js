function ImagePath(path) {
  if (path === null || path === undefined) return "https://via.placeholder.com/500x750"
  else return import.meta.env.VITE_VUE_APP_API_IMAGE_PATH + path
}

export {
  ImagePath
};

