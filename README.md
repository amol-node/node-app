# web crawler node-app

This will take GET REST API call with url as query string param and crawls a provided url. It returns the resoponse as json object containing allLinks, images links, social urls etc.

How to setup:
Git clone the current repo on you local machine.

Set NODE_ENV=dev

Execute below step to download depedencies & devDependencies:
npm install && npm install -g

Once downloads done Execute below command to start local server:
npm run dev

Start production mode :
npm run start

Execute Test cases :
npm run test

Start process using pm2:
pm2 start process.json


Access url:
http://localhost:3005/api/crwal?url=https://google.com
