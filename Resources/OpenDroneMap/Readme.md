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

- You can either go with default setting or apply your own customization for processing parameter . For us : We have enabled DTM generation too along with DEM and high resolution orthophoto 


- Hit start and you should see your processing window like following : This means processing has started , Now sit back, Grab a coffee and Relax until done 

![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1aac79cd-c7a6-45bd-a83e-2cb1bb36269c)
 


