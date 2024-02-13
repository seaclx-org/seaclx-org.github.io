function getCustomUrl() {
  const url = new URL(location.href);
  const storeId = url.searchParams.get("storeId");
  const productId = url.searchParams.get("productId");
  const promotionType = url.searchParams.get("promotionType");
  const dev = url.searchParams.get("dev");
  if (promotionType && storeId) {
    return `${
      dev == "true" ? "streetliidev" : "streetlii"
    }://AllPromotions?promotionType=${promotionType}&storeId=${storeId}`;
  } else if (storeId) {
    return `${
      dev == "true" ? "streetliidev" : "streetlii"
    }://StoreDetails?storeId=${storeId}`;
  } else if (productId) {
    return `${
      dev == "true" ? "streetliidev" : "streetlii"
    }://ProductDetails?productId=${productId}`;
  }
}

const custom = getCustomUrl();
const alt = "../download-app/index.html";
let timer;
let heartbeat;
let iframe_timer;

function clearTimers() {
  clearTimeout(timer);
  clearTimeout(heartbeat);
  clearTimeout(iframe_timer);
}

function intervalHeartbeat() {
  if (document.webkitHidden || document.hidden) {
    clearTimers();
  }
}

function tryIframeApproach() {
  const iframe = document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "1px";
  iframe.style.height = "1px";
  iframe.onload = function () {
    document.location = alt;
  };
  iframe.src = custom;
  document.body.appendChild(iframe);
}

function tryWebkitApproach() {
  document.location = custom;
  timer = setTimeout(function () {
    document.location = alt;
  }, 2500);
}

function launch_app_or_alt_url(el) {
  heartbeat = setInterval(intervalHeartbeat, 200);
  tryWebkitApproach();
  iframe_timer = setTimeout(function () {
    tryIframeApproach();
  }, 1500);
}

launch_app_or_alt_url(document);
