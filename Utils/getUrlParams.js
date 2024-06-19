export function getUrlParams() {
  const params = {};
  window.location.search
    .substring(1)
    .split("&")
    .forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = decodeURIComponent(value);
    });
  return params;
}
