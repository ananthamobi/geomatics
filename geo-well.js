// Ensure you import Turf via CDN or npm: <script src="https://jsdelivr.net"></script>

// 1. Define two geographic point features (Longitude, Latitude) using GeoJSON format
const pointA = turf.point([-73.9857, 40.7484]); // Empire State Building
const pointB = turf.point([-74.0445, 40.6892]); // Statue of Liberty

// 2. Calculate the geodesic distance between the two points
const options = { units: 'miles' };
const distance = turf.distance(pointA, pointB, options);

console.log(`The distance between points is ${distance.toFixed(2)} miles.`);

// 3. Create a 0.5-mile spatial "buffer" polygon zone around the Empire State Building
const bufferedZone = turf.buffer(pointA, 0.5, { units: 'miles' });
console.log("Generated Buffer Polygon GeoJSON:", JSON.stringify(bufferedZone));
