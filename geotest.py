import geopandas as gpd
import matplotlib.pyplot as plt

# 1. Read existing spatial data
# Replace with the actual path to your spatial file (.shp, .geojson, etc.)
gdf = gpd.read_file('major_cities.geojson')

# 2. Calculate the unified geometric center (Centroid) of all features
centroid = gdf.unary_union.centroid
print(f"The global center point is located at: {centroid}")

# 3. Quickly generate a static plot map using Matplotlib
gdf.plot(marker='o', color='red', markersize=50)
plt.title("Spatial Map of Major Cities")
plt.xlabel("Longitude")
plt.ylabel("Latitude")
plt.show()
