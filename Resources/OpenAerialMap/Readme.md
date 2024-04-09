# Open Aerial Map


## Introduction 

URL : https://openaerialmap.org

Description : OpenAerialMap is an open service to provide access to a commons of openly licensed imagery and map layer services. Download or contribute imagery to the growing commons of openly licensed imagery.

## Steps : 

1) Go to [openaerialmap](https://openaerialmap.org)
2) Sign in using your google account 
3) To upload your image : Hit Upload 
4) Provide metadata for your image ( Type of sensor used , License , Creator and etc ) 
5) Submit , Grab Tea and Wait for the completion 
6) Once upload is done you can leave the browser , OAM will do its own postprocessing step and email you when it is done 
7) Once image is available in OAM you can share it with your network , Grab it as TMS/ WMTS in your QGIS , Perform mapping using this imagery . Opportunities are unlimited 

## Troubleshooting 

Currently , OpenAerialMap doesn't support more than 4 bands . if your image has more than 4 bands then you need to remove extra bands in order to upload in OAM 

To remove bands / only extract related bands in your image : 

For us , We had 6 band image hence we needed to do some preprocessing using QGIS 

- Reaarange Bands ( GDAL utility ) 

In QGIS search and find Reaarange Banda under GDAL . This function allows you to choose and extract specific bands from
the image and create new tiff with it . We created two orthophotos 
1. Orthophoto with R, G, B and NIR band 
2. Orthophoto with only RGB band 

Now you can upload them to QGIS. 

Sometimes there will be black ground in the image while creating new tiff . We need to remove that before uploading.