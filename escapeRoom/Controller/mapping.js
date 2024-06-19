export const coordinatesArray = [
  { left: 615, top: 950, right: 655, bottom: 995 },
  { left: 300, top: 665, right: 415, bottom: 785 },
  { left: 450, top: 560, right: 700, bottom: 770 },
  { left: 915, top: 445, right: 970, bottom: 480 },
  { left: 870, top: 445, right: 1030, bottom: 580 },
  { left: 485, top: 160, right: 680, bottom: 480 },
  { left: 1090, top: 410, right: 1250, bottom: 575 },
  { left: 890, top: 250, right: 1110, bottom: 320 },
  { left: 1500, top: 130, right: 1840, bottom: 910 },
];

export const areaIds = [
  "lock",
  "books",
  "TV",
  "post-it",
  "monitor",
  "matrix",
  "symbolLock",
  "safe",
  "door",
];

// Dynamically create area elements
for (let i = 0; i < coordinatesArray.length; i++) {
  const area = document.createElement("area");
  area.setAttribute("shape", "rect");
  area.setAttribute(
    "coords",
    `${(coordinatesArray[i].left * window.innerHeight) / 1080}
    ,${(coordinatesArray[i].top * window.innerHeight) / 1080}
    ,${(coordinatesArray[i].right * window.innerHeight) / 1080}
    ,${(coordinatesArray[i].bottom * window.innerHeight) / 1080}`
  );
  area.setAttribute("alt", areaIds[i]);
  area.setAttribute("id", areaIds[i]);
  area.setAttribute("nohref", "");
  document.getElementById("mapa").appendChild(area);
}