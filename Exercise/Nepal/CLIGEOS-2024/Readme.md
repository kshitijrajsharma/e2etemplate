# End to end mapping exercise


## Context : 

In April of 2024 , We have performed end to end mapping exercise with the motive of demonstrating how using all opensource softwares we can carry out full mapping scenario to support climate change objective . E2E exercise was done in CLImbing for [CLImate GEOspatial School CLIGEOS-2024](https://cligeos2024.conscor.com/)  which was held in 
Annapurna-3, Lumle - Pokhara, NEPAL Directorate of Agricultural Research, Gandaki Province. Jointly organized by  CENTER FOR SPACE SCIENCE AND GEOMATICS STUDIES (CSSGS) PASHCHIMANCHAL CAMPUS, INSTITUTE OF ENGINEERING, TRIBHUVAN UNIVERSITY, Nepal, UNIVERSITA’ DEGLI STUDI DI UDINE, Italy and  LJ UNIVERSITY, India. 

![IMG_3759](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/525a98db-aa9e-45fa-a2ed-1d9d049e50f8)


## Testing Area : 

Perimeter of Agriculture Research Center : https://www.openstreetmap.org/way/742793744 . Which is located around 20 KM NW of Pokhara

<img width="775" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6b5d92ad-f8b9-4ee7-947c-ac8de152d525">


## Activities : 

### Training : 

Primary objective is to train all the participant of summer school . Participant of summer school had diverse background consisitng of students, geospatial professionals and government represesntative. Total of 35 people have  attended the summer school 


## Checklist for the activity : 
1. Register yourself in [OpenStreetMap](https://www.openstreetmap.org/)
2. Download ODK Collect from [playstore](https://play.google.com/store/apps/details?id=org.odk.collect.android&pli=1)
3. Download [QGIS](https://qgis.org/en/site/forusers/download.html) in your laptop 
4. Create your account in [Tasking Manager Dev instance](https://tasks-dev.hotosm.org)
5. Create your account in [Field Mapping Tasking Manager](https://fmtm.hotosm.org/)


## Steps Performed : 

1) Get Area of Interest : 

Area of interest has been created with the local knowleadge and modified in OpenStreetMap 
```osm_id=742793744```

2 ) Download Area of interest from OpenStreetMap 

We have used rawdata api to download our AOI 

https://api-prod.raw-data.hotosm.org/v1/osm_id/?osm_id=742793744

3 ) Flight Plan : 

![IMG_29BD788E9857-1](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4ef1b59a-407a-45b7-b3d3-fc97eb2a313e)


4 ) Drone Data collection 

Data has been collected covering whole perimeter with Phantom 4 RTK Multispectral 
<img width="485" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/a1ced91d-4113-4436-baa4-289f1dd572cd">


5 ) Drone Data Processing 

We used OpenDroneMap to Process the collected Drone image . We have added NIR ( Near Infrared Band ) too as we had multispectral drone and our testing area is agriculture research center. TBD ATTACH SCREENSHOT HERE

6 ) Upload geotiff to OpenAerial Map 

Processed Orthophoto was uploaded to OpenAerialMap . Find the image [here] () 
