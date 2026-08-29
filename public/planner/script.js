function show(id) {
  document.querySelectorAll("section").forEach(function (s) {
    s.style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

document.getElementById("planButton").onclick = function () {
  show("morning");
};

document.getElementById("morningcontinue").onclick = function () {
  show("afternoon");
};
document.getElementById("afternooncontinue").onclick = function () {
  show("evening");
};
document.getElementById("eveningcontinue").onclick = function () {
  show("night");
};
document.getElementById("finishButton").onclick = function () {
  show("end");
};

document.getElementById("morningprevious").onclick = function () {
  show("welcome");
};
document.getElementById("afternoonprevious").onclick = function () {
  show("morning");
};
document.getElementById("eveningprevious").onclick = function () {
  show("afternoon");
};
document.getElementById("nightprevious").onclick = function () {
  show("evening");
};

document.getElementById("restartButton").onclick = function () {
  show("welcome");
};
