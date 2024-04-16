# Open Drone Map Guide

This guide provides a comprehensive walkthrough for setting up and using OpenDroneMap, including image import, processing, and sharing.

## Getting Started

### Download and Setup

- Download OpenDroneMap from [GitHub](https://github.com/OpenDroneMap/WebODM/).
- Ensure Docker is running on your machine before proceeding with the clone and start commands:
  ```bash
  git clone https://github.com/OpenDroneMap/WebODM --config core.autocrlf=input --depth 1
  cd WebODM
  ./webodm.sh start
  ```

Upon successful completion, you should see the following confirmation message:

![Confirmation Message](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d79c6224-cd16-4527-8657-81da5f98dc0a)

### Initial Access and Setup

- Access the WebODM interface by navigating to http://localhost:8000.
- Create a username and password (e.g., `admin` : `admin`).

![Login Screen](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/248db0c5-a324-4926-8df6-92a525f28352)

## Working with Projects

### Creating a Project

- Initiate a new project. For example, a project named `batulechaur project`.

![New Project](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/c4963779-7a10-4597-976d-21f5394ae839)

### Importing Images

- Use the `import` option within your project to add images for processing.

![Import Images](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/fa306d90-3af4-40e5-baeb-3f1ecd2385e4)

### Processing Images

- Configure processing parameters. Options include enabling DTM generation, DEM, high-resolution orthophoto, and image resizing.
<img width="594" alt="image" src="https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1a05cc53-9278-432c-9a41-3ad4d34362c4">

- Start the processing. A processing window will appear indicating the process has begun.

![Processing Window](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/296a1599-c31e-481b-8a69-f2652f3a4d99)

![Processing Start](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1aac79cd-c7a6-45bd-a83e-2cb1bb36269c)

### Viewing Results

- After processing, download results and metadata.

![Download Results](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/5ebbd181-b21d-4ce7-af1c-8dd8c1cd167b)

- Visualize the 3D model directly in the browser.

![View 3D Model](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/a8dd2657-695e-45a8-b3b8-7a11210622db)

- Download processed results, like orthophotos, for further analysis in tools like QGIS.

![Download Orthophoto](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/1d1160d3-6c4e-4421-bed7-060d41011771)

![Orthophoto in QGIS](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/0af32bb5-1435-4f66-8ca4-faf8f8e826b5)

![QGIS Visualization](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d5da662f-cda4-445d-83d5-c313f8b35c2c)

## Sharing Results

### Option 1: Directly from OpenAerialMap

- Upload processed images to OpenAerialMap by filling in the required metadata.

![Upload to OAM](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/78a82706-3afd-4f38-9d9b-7ced6d250309)

- Once the upload is complete, images can be shared using TMS, WMTS, or direct URLs.

![OAM Metadata](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/09408792-91e2-4717-a150-5528ee812cfd)

- Screen after Processed 

![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/3548d581-1aaf-46d4-bab9-e0d1bfcd3b34)

- Image in OAM

![image](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/2ea616fd-9d9a-47a9-8c80-e112e612a169)


### Option 2: From OpenDroneMap

- Install openaerialmap plugins. Now go back to your browser where OpenDroneMap is loaded, Click on Plugins.

![Plugin Page](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/7a89b150-4c39-4f59-b746-14ca9ed345b3)

- Enable openaerialmap.

![Enable OAM](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/bfb93833-911a-4942-8f21-5c2f36d449e0)

Upon enabling, you will see OpenAerialMap tab on the left side of your screen.

![OAM Tab](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/8a1879a8-b366-4a72-bf00-2283adc5cb86)

- Follow the steps on your screen and paste your token.

![Paste Token](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/876ddfd2-1c2c-47a0-8191-230e27bf3f89)

Upon sign in, click on your profile image, and you will see the following. Click on "Request 3rd party API token".

![Request Token](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/4cadd31a-d85d-4c5c-863b-b0ff8b9ab3f5)

Once you copy and paste your token, you will see the following in your OpenDroneMap.

![Token Accepted](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/d6ccbfd6-d995-4e67-834b-602dc656667b)

Now come back to your dashboard and project; you will see a new button "Share To OAM". Click it.

![Share to OAM](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/45712656-ee0d-4e89-8d54-917586ec11b3)

Change your Title and Hit SHARE. It will take some time to upload based on your network speed.

![Uploading](https://github.com/kshitijrajsharma/e2eTemplate/assets/36752999/10bab070-1133-420d-8b03-bbe2d19db593)


## NDVI & Other Plant health Generation 

OpenDroneMap can generate NDVI and other plan health related indexes directly. Navigate to Plant Health tab , Select the metric you want to generate it will instantly populate those in the webmap , Once you verify what you need click on generate and Download the raw tiff which later you can use it in QGIS 

### Steps 

- Click on view map in your task 

- Click on Plant Health tab 
![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/e96b4df3-b22b-45c7-a857-896c6dc38c33)

- Expand your layers panel located on top left section of your map 

![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/47343cff-b891-4702-af45-947ad8e675e4)

- Choose the algorithm you want ( NDVI, SDVI etc ) 
![image](https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/eddcb17b-7b61-4818-8a58-760d89c47f64)

- Download them as GeoTiff Raw 

It will take some time to generate but you will have ndvi tiff / other tiff preprocessed 


## Troubleshooting 


For windows users : While running OpenDroneMap with Docker you might encounter with `out of memory` problem . By default when [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) is setup , it might allocate only limited amount of memory for the VM and hence docker could be limited . To solve this : 

1 ) Create `.wslconfig` file in your userprofile folder as documented [here](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig)
2 ) Add your memory limit that you want VM to use 

```
[wsl2]
memory=14GB
```


