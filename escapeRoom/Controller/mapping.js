const coordinatesArray = [
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

const idsArray = [
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

const map = document.getElementById("mapa");
// Dynamically create area elements
for (let i = 0; i < coordinatesArray.length; i++) {
  const area = document.createElement("area");
  area.setAttribute("shape", "rect");
  area.setAttribute(
    "coords",
    `${coordinatesArray[i].left},${coordinatesArray[i].top},${coordinatesArray[i].right},${coordinatesArray[i].bottom}`
  );
  area.setAttribute("alt", idsArray[i]);
  area.setAttribute("id", idsArray[i]);
  area.setAttribute("nohref", "");
  map.appendChild(area);
}

/* 

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Mapping Coordinates</title>
<style>
    #image {
        max-width: 100%;
        height: auto;
    }
</style>
</head>
<body>

<img id="image" src="your_image.jpg" alt="Your Image" usemap="#image-map">

<script>
window.onload = function() {
    const image = document.getElementById('image');

    image.onload = function() {
        // Get the dimensions of the image after it loads
        const imageWidth = image.width;
        const imageHeight = image.height;

        // Array of coordinates for the areas
        const coordinatesArray = [
            {left: 615, top: 950, right: 655, bottom: 995},
            // Add more coordinates as needed
        ];

        // Create a map element
        const map = document.createElement('map');
        map.setAttribute('name', 'image-map');

        // Create areas using the coordinates array
        coordinatesArray.forEach(function(coords, index) {
            // Convert coordinates to percentages
            const leftPercentage = (coords.left / imageWidth) * 100;
            const topPercentage = (coords.top / imageHeight) * 100;
            const rightPercentage = (coords.right / imageWidth) * 100;
            const bottomPercentage = (coords.bottom / imageHeight) * 100;

            // Create area element
            const area = document.createElement('area');
            area.setAttribute('shape', 'rect');
            area.setAttribute('coords', `${leftPercentage}%, ${topPercentage}%, ${rightPercentage}%, ${bottomPercentage}%`);
            area.setAttribute('alt', `Area ${index + 1}`);

            // Append area to the map
            map.appendChild(area);
        });

        // Append map to the document body
        document.body.appendChild(map);
    };
};
</script>

</body>
</html>
 */
