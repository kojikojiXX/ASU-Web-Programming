// All the code below will be run once the page content finishes loading.
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Add your JavaScript code here.
  (function () {
    let v;
    v = "old";
    const f6 = function () {
      return v;
    };
    v = "new";
    outputElement.value += "v: " + v + ""
  }());

});