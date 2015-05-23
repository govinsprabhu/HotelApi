1.Install mongodb from https://www.mongodb.org/
2.Go to the directory in cmd and install all dependencies by command 
	$npm install
3.start server by running start.js
	$node start.js
4.Test using http://localhost:3000/find?ln=en&topic=w&pg=0
ln =language
 {en,hi,ml,ta}
topic ={ w,n,e,b,s}
w -world
n -india
e - entertainment
b - business
s - sports

pg = page

Automatic Deployment to Amazon Ec2 Enabled for this repo.. Any commit to master branch will be deployed to AWS.
And you can see the live version at http://52.74.165.26:3000/