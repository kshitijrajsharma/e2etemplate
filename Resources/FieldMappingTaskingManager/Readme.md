## Field Mapping Tasking Manager
The field mapping manager is responsible for coordinating field mapping activities, ensuring the accuracy and completeness of the data collected, and managing the data itself. This involves a number of key steps, including:

  - Planning: The field mapping manager must develop a clear plan for the data collection process, including identifying key areas of focus and establishing timelines and targets.

  - Recruitment: The field mapping manager must recruit and train field mappers, ensuring that they have the necessary skills and expertise to collect accurate and high-quality data.

  - Coordination: The field mapping manager must coordinate the activities of the field mappers, ensuring that they are working together effectively and efficiently.

Official Documentation : https://fmtm.dev/ 

## XLS Forms 

- Get Example XLS Forms from here : https://github.com/hotosm/fmtm/tree/development/docs/example-xlsforms 
- More generic forms : https://github.com/hotosm/osm-fieldwork/tree/main/osm_fieldwork/xlsforms


## Steps : 

## Managers 

Field Mapping Project was only created after Remote Mapping is Done and Validated 

- Go to https://fmtm.hotosm.org/ 

- Click on Create New Project 

<img width="1399" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/c8eec3e9-2165-43ae-b0a4-5fd2cba84d01">

- Provide your project details and instruction ( For us , we used FMTM Public beta in organization )

<img width="1408" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/8311ad80-2076-4766-9a80-3e3d6a50466f">

- Upload your area of interest 

<img width="978" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3ba96774-7291-442e-a3ca-b8d1889c252c">

- Select category, Question set for mapping 

You can create your own [XLSFORM](https://hotosm.github.io/osm-fieldwork/about/xlsforms/) or select exisiting preset available in FMTM for the mapping based on your usecase. We selected preset 

<img width="425" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/1352a6e8-15e0-4254-af36-21030aefa350">

- Get your remotely mapped and validated features from Tasking Manager 

We mapped and validated all the features from tasking manager and brought them in to FMTM using Use Data Extract Function 

<img width="1018" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4f230a4f-96ac-40b7-93a1-ef5ad08836e1">

- Create tasks and Hit Save 

We splitted our area in to smaller task with max 8 buildings on each 

<img width="1066" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/c360ac0b-6756-49fc-b474-8f87b1afd686">


## Mappers 

- Go to https://fmtm.hotosm.org/ 

- Hit `sign out`  and `sign in` 

- Select the project 

<img width="1403" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/54b33b24-3bc0-4b33-aaeb-3bb5e1684cc5">

- Select tasks you want to map and free 

<img width="671" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/45e0ddbd-aea2-47a3-9826-a0c492c07e04">

- Download the QR Code and Hit Start Mapping ( Remember to hit start mapping before you head to field ) 

- Open ODK Collect in your smart phone 

- Click on Manual QR Code Scanning 

- Click on three dots on top right and click on import QR Code 

- Select the QR Code you have downloaded and hit ok 

- Now you should have a following screen 

<img width="317" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/3c25dafc-a7f3-48f9-8556-046156dd477d">

- Hit Create new form ( Your form will be downloaded ) 

<img width="327" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/cf8a2117-8958-4f25-9551-7f74a4cf4754">

- Once you see the form inside you are good to go in field 

- Now select the features from the map ( all your buildings should be loaded to your phone)  select them when you are there and start filling the questionaire 

<img width="309" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/4032445a-8884-4a73-9f93-60d461d6a8ea">

- Save all your forms to draft 

- Revisit your forms once you are done with your tasks mark them ready to sent
 
- Once you are back on internet form will be auto submitted 


## Download and Visualize 

You can visualize the form submission details and task details in infographics of the page 

<img width="1344" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/c6885742-c829-464f-b348-cd6f48dd7ba0">


### Downloading data 
Downloading data from UI is not completed yet , Hence we used the API 

https://api.fmtm.hotosm.org/submission/download?project_id=90&export_json=true

<img width="779" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/5b32337c-e8a3-456f-b5de-7c1f2e01a268">

After data is available with `.json` We used the helper function in dev api to convert it to geojson 

https://api.dev.fmtm.hotosm.org/docs#/helper/convert_odk_submission_json_to_geojson_wrapper_helper_convert_odk_submission_json_to_geojson_post

For us we couldn't make use of above API hence we created a python script that can generate geojson from the odk json  Just run like this 

```python 
python odk_json_2_geojson.py
```

We have also added this in `data` folder which we created using field mapping  

<img width="339" alt="image" src="https://github.com/kshitijrajsharma/e2etemplate/assets/36752999/319e0469-d6c6-4a9b-99c2-9f90ed662f93">

Now since this geojson contains osmid of the feature we can simply join them from the output came from OpenStreetMap 
