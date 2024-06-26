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


### Schedule and Event Planned 

#### E2E Activity detail plan 
![signal-2024-04-08-150936_002](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/d9a8149b-d1d2-41e4-a721-213448ef7f87)

#### Summer School overall program
![signal-2024-04-08-150936_003](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/cf277b07-8d7e-4474-8590-f3f2917a11e2)


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

2) Download Area of interest from OpenStreetMap 

We have used rawdata api to download our AOI 

https://api-prod.raw-data.hotosm.org/v1/osm_id/?osm_id=742793744

3) Flight Plan : 

![IMG_29BD788E9857-1](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4ef1b59a-407a-45b7-b3d3-fc97eb2a313e)


4) Drone Data collection 

Data has been collected covering whole perimeter with Phantom 4 RTK Multispectral 
<img width="485" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/a1ced91d-4113-4436-baa4-289f1dd572cd">


5) Drone Data Processing 

We used OpenDroneMap to Process the collected Drone image . We have added NIR ( Near Infrared Band ) too as we had multispectral drone and our testing area is agriculture research center. We generated Digital Surface Model ( DSM ) , Digital Terrain Model ( DTM ) and Orthophoto with 6 bands 
![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3de4a50f-1ad3-41d8-8579-a22476e98b4f)
![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/be8469b1-7e94-4368-bc22-eb456f193653)



6) Upload geotiff to OpenAerial Map 

Processed Orthophoto was uploaded to OpenAerialMap . Find the image [here] (https://map.openaerialmap.org/#/-18.632,18.478999999999985,3/latest/6614a992c055e600014ac552?_k=bo3rix) 
<img width="1315" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/a71adaa0-a3bb-483b-9e11-da84f93e039f">



7) Create Tasking Manager Project 
For our exercise we created our tasking manager project in [dev server](https://tasks-dev.hotosm.org/projects/5) using the [TMS](https://tiles.openaerialmap.org/6614a755c055e600014ac550/0/6614a755c055e600014ac551/{z}/{x}/{y}) that we got for our image from OpenAerialMap. It is done in the morning after image was uploaded so that all participant can map in the afternoon. 

<img width="1427" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4007a047-253c-4e95-94e4-a5cdeaa686ec">

8) Map and Validate 
Total 29 People contributed and validated each other's Work . We made sure remote mapping is up to date in the area . We spent Approx 3 Hour for remote mapping.
<img width="934" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6466adc1-2b4a-4069-beb3-ca652827c3b6">


9) Creation of Local Model : 

We created our local model with the remote mapping we have done 
<img width="1414" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/a720453a-e738-454f-8b3e-fbe6d89e3e1a">

https://fair-dev.hotosm.org/ai-models/143 

We could get following prediction ( We are aware as we are predicting in same area where model is trained on , but since our area wasn't big enough for both training and prediction we used the same to get the grasp idea ) 
<img width="1361" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3c4cf95b-8992-4905-beba-757c9171b723">

Since we mapped the whole area , We were no need to push the prediction and we move ahead with the field mapping tasking manager


10) Create Field Mapping Tasking Manager Project 

We created 30 tasks for the mappers and Went to the field to collect data 

Link : https://fmtm.hotosm.org/project_details/MTAxMTAxMA== 

<img width="1402" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/62f8ac0c-9b1e-424e-b011-c24f29492f9b">

11) Collect the information and upload 
<img width="1331" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/94e7ec55-c4a3-4e9f-a150-5ea36c692d43">


<div style="display: flex; justify-content: center;">
  <img src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/9b87f26e-ccd6-4071-870b-a56645d0e414" width="45%">
  <img src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4b630979-261a-4d9c-80a1-0315602aad4c" width="45%">
</div>

We loaded our final field data as geojson like this 
Link : https://github.com/kshitijrajsharma/e2etemplate/blob/main/Exercise/Nepal/CLIGEOS-2024/data/fmtm-data.geojson 

![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4ee00af3-7b5c-4653-92ca-26c9bfc43fc7)


12) Download OpenStreetMap Data 

Now we have field data collected , Remotely mapped buildings we create a export job in OSM Export Tool , Which will be later used in the projects 

https://export.hotosm.org/v3/exports/eecdb3b1-b690-40b9-b8db-dc6a898eef1b 

<img width="1432" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/84964ce2-1ec6-4c49-86a8-cc12cb894268">

13) Visualize and analysis in QGIS: 

Now we load everything in to QGIS 

<img width="883" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6bd5ac51-15b0-47b0-b315-1761e4d8ef5c">


14) Split Groups for the project using data we generate

<img width="456" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/e0c988d1-4915-4f2d-a62b-1d5f6bc456db">


15) Group project results 

Some sample photos have been attached 


<div style="display: flex;">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/18e73fdb-4748-47d1-a483-8f8cb1165cab">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/d83301c0-e785-446f-835b-271e5f9ce561">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/46f4e591-c7af-437a-a532-7f6f7b37a395">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/aa067c29-f25c-4e7e-81aa-ca0ae9ebe5c2">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/18bf1a2b-861a-46c9-b1c4-af8cc6255fd4">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/15d9b7d2-778c-4a6c-a2fa-0b3c98326e9d">
    <img width="400" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/a8f63da6-8654-411c-b694-9e860c045a09">
</div>


#### Notes 
<img width="810" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3c50f12d-8552-4aae-8d79-e10402df63e1">



## Conclusion 

When we started this exercise, we had a drone, QGIS on our laptop, an Android smartphone with ODK installed, and enthusiastic learners eager to perform. We didn't use any commercial software (besides the software used to fly the drone) during this exercise. With all free and open-source tools, we were able to generate:

    Orthophoto
    Digital Surface Model
    3D Point Clouds
    NDVI (Normalized Difference Vegetation Index) along with other plant health indices
    OpenAerialMap TMS (Tile Map Service)
    Field mapping data (building levels, materials, and names)
    Remote mapping data with footprints of buildings and roads
    A local AI model for our area

All these data were later used by different groups to perform their short projects, which is awesome. Hence, we can say that an end-to-end mapping exercise can be done effectively in a short period, low cost with actual results in real-life scenarios, using free and open-source tools in collaborative environment. With help of collaborative nature of tasking manager & field mapping tasking manager we were able to utilize our manpower resources by tasks properly and effectively . 

