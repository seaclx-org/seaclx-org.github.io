function getAppUrl() {
  const userAgent = navigator.userAgent || window.opera;

  if (/android/i.test(userAgent)) {
    return "market://details?id=seaclx.streetlii";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "https://apps.apple.com/app/streetlii/id6473242346";
  }

  return undefined;
}

window.onload = () => {
  const url = getAppUrl();
  if (url) {
    location.assign(url);
  }
};
