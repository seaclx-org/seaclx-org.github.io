function getAppUrl() {
  const userAgent = navigator.userAgent || window.opera;

  if (/android/i.test(userAgent)) {
    return "market://details?id=seaclx.streetlii.business";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "https://apps.apple.com/us/app/streetlii-business/id6476365421";
  }

  return undefined;
}

window.onload = () => {
  const url = getAppUrl();
  if (url) {
    location.assign(url);
  }
};
