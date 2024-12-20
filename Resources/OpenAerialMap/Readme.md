# Open Aerial Map
![image](https://github.com/user-attachments/assets/99795e87-20da-41c2-b953-3125b5d84bb1)

## Introduction 

URL : https://openaerialmap.org

Description : OpenAerialMap is an open service to provide access to a commons of openly licensed imagery and map layer services. Download or contribute imagery to the growing commons of openly licensed imagery.

## Steps : 

1) Go to [openaerialmap](https://openaerialmap.org)
2) Sign in using your google account
   ![image](https://github.com/user-attachments/assets/8fc70235-cb67-44b4-ad81-735bed98cd15)
3) To upload your image : Hit Upload 
4) Provide metadata for your image ( Type of sensor used , License , Creator and etc ) 
5) Submit , Grab Tea and Wait for the completion 
6) Once upload is done you can leave the browser , OAM will do its own postprocessing step and email you when it is done 
7) Once image is available in OAM you can share it with your network , Grab it as TMS/ WMTS in your QGIS , Perform mapping using this imagery . Opportunities are unlimited 

## Troubleshooting 

Currently , OpenAerialMap doesn't support more than 4 bands . if your image has more than 4 bands then you need to remove extra bands in order to upload in OAM 


### Removing extra bands ( Adopt 4 bands limit of OpenAerialMap)

To remove bands / only extract related bands in your image : 

For us , We had 6 band image hence we needed to do some preprocessing using QGIS 

- Reaarange Bands ( GDAL utility ) 

<img width="678" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/ac57bf34-b37c-4f7f-a3be-1b475314bdf4">


In QGIS search and find Reaarange bands under GDAL . This function allows you to choose and extract specific bands from
the image and create new tiff with it . We created two orthophotos 
1. Orthophoto with R, G, B and NIR band 
2. Orthophoto with only RGB band 

### Exporting tiff as rendered image ( fix no display problem / Not rendering issue ) 

By default with exporting only RGB band as Raw we encountered following issue in OAM ( Image not being rendered ) and not only in OAM its not rendering in ID editor , JOSM and QGIS . 
<img width="714" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3480adee-f8d5-421c-9847-6a62a3213716">


- Hence to solve this problem ,  we exported our RGB tiff as rendered image in QGIS 
<img width="568" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6fa8b3af-e5e6-4c43-a633-eea61d62816c">


### Black background for nodata problem 

Since we used our area of interest to create this orthophoto as there will be pixels with no data in it and by result its being displayed as black in OpenAerialMap and all other places 
<img width="468" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/e75a1fcb-487b-4682-836c-aedeec739a16">

- Hence to solve this problem we clipped our rendrered exported tiff with our Area of Interest in QGIS , ( We had to clip specifically the rendered image output instead of RAW to avoid this problem ) 
<img width="684" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/9c4e8734-aa76-4368-9f5b-b295355ab16a">


Finally , Now you can upload your rendered clip RGB image  to OpenAerialMap.

<img width="1193" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/c0ca703d-b3c8-4aae-9411-05517dd9d8e9">
