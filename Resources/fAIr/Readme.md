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

- 
