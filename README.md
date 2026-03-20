# Przegladarka Dzialek EGIB

A web GIS application for browsing and filtering land parcels (dzialki) from Polish county cadastral registers (Ewidencja Gruntow i Budynkow). Data is fetched live from WFS services published by individual county offices (powiaty).

## What it does

The app lets you select one or more counties, apply filters by land use class (KLASOUZYTKI_EGIB), registration group (GRUPA_REJESTROWA) and area, and view the matching parcels on an interactive map. You can also download the filtered result as a GeoJSON file in the EPSG:2180 coordinate system.

## How to use it

1. Type a county name in the Powiat search box and tick one or more counties.
2. Optionally select one or more values from Grupa Rejestrowa and Klasa Uzytku. The search field at the top of each list lets you narrow down the options. Parcels that contain any of the selected classes in their KLASOUZYTKI field are included, even if the field holds multiple comma-separated values.
3. Optionally enter a minimum and/or maximum area in square metres.
4. Click Wyszukaj dzialki. The map zooms to the matching parcels automatically.
5. Click Pobierz GeoJSON to download the current results as a .geojson file.
6. Use the Dzialki and Satelita (Google) checkboxes in the top-right corner of the map to toggle layer visibility.
7. Click on any parcel to see its cadastral attributes in a popup.

## Notes on data availability

Not all county WFS servers expose the GRUPA_REJESTROWA and KLASOUZYTKI_EGIB fields. When a county lacks these fields, the app includes all its parcels regardless of the group or class filter and shows a warning in the result counter.

Some county servers are occasionally offline or slow. The app will report a connection error for those counties and continue loading data from the remaining selected ones.