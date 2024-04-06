## Open Drone Map

- Download opendronemap from here : 

https://github.com/OpenDroneMap/WebODM/

- Clone and start ( Make sure you have docker running ) 


```bash
git clone https://github.com/OpenDroneMap/WebODM --config core.autocrlf=input --depth 1
cd WebODM
./webodm.sh start 
```

- Upon successfull completion you should see following 
<img width="563" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d79c6224-cd16-4527-8657-81da5f98dc0a">

- Hit http://localhost:8000 and You would see following screen 

- Create username and password : we created `admin` : `admin` 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/248db0c5-a324-4926-8df6-92a525f28352)

- Home page will be available like following 
<img width="742" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/824d1b8d-5648-4431-bf2b-a8742d74d7d5">

- Create your project 
  We created project called `batulechaur project`
<img width="739" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/c4963779-7a10-4597-976d-21f5394ae839">

- Import your images using `import` option in your created project 
<img width="734" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/fa306d90-3af4-40e5-baeb-3f1ecd2385e4">

- After import You would see following window 
<img width="1145" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d142fd4f-fae9-4a96-b659-a5ae7b9d481a">


- You can either go with default setting or apply your own customization for processing parameter . For us : We have enabled DTM generation too along with DEM , high resolution orthophoto and enabled resize
<img width="594" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1a05cc53-9278-432c-9a41-3ad4d34362c4">


- Hit start and you should see your processing window like following : This means processing has started , Now sit back, Grab a coffee and Relax until done 

<img width="1143" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/296a1599-c31e-481b-8a69-f2652f3a4d99">


![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1aac79cd-c7a6-45bd-a83e-2cb1bb36269c)
 
- Once your processing is complete , You will be able to download the results along with metadata in the screen 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/5ebbd181-b21d-4ce7-af1c-8dd8c1cd167b)

- Visualize the 3D Model in the browser itself , Click on view 3D Model
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/a8dd2657-695e-45a8-b3b8-7a11210622db)

- Download you processed results : Click on download assets , We will download orthophoto  and visualize it in QGIS
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1d1160d3-6c4e-4421-bed7-060d41011771)
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/0af32bb5-1435-4f66-8ca4-faf8f8e826b5)

- Drag and drop orthophoto to QGIS 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d5da662f-cda4-445d-83d5-c313f8b35c2c)

- Upload to OAM 
- Option 1 : Directly from OpenAerialMap 

- Login to https://map.openaerialmap.org/ 
- Hit Upload
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/78a82706-3afd-4f38-9d9b-7ced6d250309)
- Fill up all metadata related to your image and hit submit 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/09408792-91e2-4717-a150-5528ee812cfd)
Once upload is done , You will see Processing of your image 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/bcce14d3-bec3-4278-a133-4d4e10f44e7a)



- Option 2 : From OpenDroneMap

- Install openaerialmap plugins 
Now go back to your browser where opendronemap is loaded , Click on Plugins

![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/7a89b150-4c39-4f59-b746-14ca9ed345b3)

- Enable openaerialmap
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/bfb93833-911a-4942-8f21-5c2f36d449e0)
Upon enabling you will see OpenAerialMap tab in left side of your screen 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/8a1879a8-b366-4a72-bf00-2283adc5cb86)

- Follow the steps on your screen and paste your token 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/876ddfd2-1c2c-47a0-8191-230e27bf3f89)

Upon sign in , Click on your profile image and you will see following , Click on Request 3rd party api token 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/4cadd31a-d85d-4c5c-863b-b0ff8b9ab3f5)
Once you copy paste your image you will see following in your opendronemap 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d6ccbfd6-d995-4e67-834b-602dc656667b)


Now comeback to your dashboard and project you will see new button Share TO OAM , Click it 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/45712656-ee0d-4e89-8d54-917586ec11b3)
Change your Title and Hit SHARE
It will take some time to upload based on your network speed 
![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/10bab070-1133-420d-8b03-bbe2d19db593)
