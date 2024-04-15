## fAIr 

**URL** : https://fair-dev.hotosm.org/

**Description** : fAIr is an open AI-assisted mapping service that aims to improve the efficiency and accuracy of mapping efforts for humanitarian purposes. 

The name fAIr is derived from the following terms:

    f: for freedom and free and open-source software
    AI: for Artificial Intelligence
    r: for resilience and our responsibility for our communities and the role we play within humanitarian mapping


## Steps 

- First we created the tiles that fit in our Area of interest in zoom level 19 

<img width="1402" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6b622cee-34de-4f18-9e33-351821a5aa2a">


- We only selected the tiles that are actually inside the AOI to avoid feeding model the bad data 

<img width="1091" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/e5b0cd74-0d44-495f-8ba9-abae5c071a3f">

- After disolving the tiles we got a single polygon that we used as Area of Interest for fAIr , Currently it was pushed usiing API but soon we would be able to upload our geojson 

https://fair-dev.hotosm.org/api/ POST Requst , Geojson geom was converted to wkt using https://geojson-to-wkt-converter.onrender.com/ as wkt is the post parameter for API 

- This Area of Interest was uploaded to fAIr using API call 
<img width="662" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/6da5b158-bce8-4cf4-bf1f-f2a8c1d0c0d9">

- We created training dataset for our area and fetched all OSM Labels that was previously mapped using tasking manager 

<img width="1283" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/7e10b6f4-1833-477c-8219-be84435994f6">

- Now once dataset is ready we created our model and submitted for training 
<img width="1436" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/fc5b41e2-4f9e-4041-b7a5-7e9f95a4c682">

- Training took almost 2 hours and we got our checkpoint 
<img width="952" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/442e0a34-69d3-4624-9d26-bd5c715c4867">


- We published the training and visualize the prediction for mapping 
<img width="1346" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/561b290b-a923-4d9d-aaea-40ef224d0cc8">

Even though we did training and prediction on the same area cause we didn't had bigger drone image predictions look ok but not good enough for OSM Mapping , This can be enhanced using more dataset and bigger area ! 
