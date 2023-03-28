# Railway Deployment



You can use Railway in order to deploy your Node Application and your Postgres database by following the below steps:


 

- ## Deploying a Node application:
-----------
1- Go to https://railway.app/

2- Create an account using your Email or GitHub (you will need to authorize it).

3- Go to dashboard

4- Click on `+ New Project`.

5- Choose `Deploy from GitHub repo` from the drop down list, then choose your GitHub repo.

6- then Click on `Deploy now`

7- Once Success, go to `Settings` tab, then scroll down to `Domains`.

8- Click on `Generate Domain`, so you can get the deployed link.


- ## Deploying Postgres Database:
---
1- Go to your dashboard

2- Click on the project that you would like to add a Postgres database to it.

3- Click on `+ New`, then choose `Database`, then `Add PostgreSQL`.

4- You might need to restart deploying your Node app. (click on your Node app, under `Deployment` tab , click on `Restart`):

    - If it didn't work, then you might need to add a PORT number by going to `Environment` tab, then add a new one by clicking on `+ New Variable`
        (
    PORT 3001 for example)

 
## Note : 

At the beginning of each month, Railway provides you with a Starter Plan includes $5 worth of resources across all of your projects for up to 500 hours, whichever runs out first.