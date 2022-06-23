export const router = {
  params: function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
  },
  push: function (url: URL, query: object) {
    const keys = query !== undefined && Object.keys(query);
    const values = query !== undefined && Object.values(query);

    const align =
      query !== undefined &&
      keys.map((key, index) => {
        return `${keys[index]}=${values[index]}`;
      });

    const queryList = query !== undefined && align.join("&");

    const finalUrl = query ? `${url}?${queryList}` : url;

    return window.location.assign(finalUrl);
  },
  back: function () {
    window.history.back();
  },
  reload: function () {
    window.location.reload();
  },
  pathname: function () {
    return window.location.pathname;
  },
  prefetch: function (url: URL, query: object) {
    const keys = query !== undefined && Object.keys(query);
    const values = query !== undefined && Object.values(query);

    const align =
      query !== undefined &&
      keys.map((key, index) => {
        return `${keys[index]}=${values[index]}`;
      });

    const queryList = query !== undefined && align.join("&");

    const finalUrl = query ? `${url}?${queryList}` : url;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "document";
    link.href = finalUrl.toString();
    document.head.appendChild(link);
  },
};

export default router;
