function initPkg_Shield() {
  let t = setInterval(() => {
      if (typeof document.getElementsByClassName("ShieldTool-list")[0] !== "undefined") {
          clearInterval(t);
          initPkg_Shield_RemoveEnter();
      }
  }, 1000);
}
