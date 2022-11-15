## RESTful API

# What is API

- API stands for Application Programing Interface

- APIs act as a mediator between the two applications to transfer the information between them

-An API is basically a set of rules/protocols which sends a request to a database and retrieves data from it.

- The same mechanism can be explaoned in terms of most famous client and server architecture.

![client-server](./images/client-server.png)

- The language that client and servers speak to send request and get response are HTPP or FTP etc.

- HTTP stands for Hyper Text Transfer Protocol and we might also heard of somethin called as HTTPS here S stands for Secure

- Now that we understand client sends request to database to get whatever it wants to but servers can only do some specific task beyond its control it contacts database to grab the information that client want

- Server can do only certain amount of things beyond which it gets the data from database .Menu of things that server can offer to client in the form of API

![client-api-server](./images/client-api-server.png)

- REST is an architectural style for designing the APIS and we have other architectures as well like SOAP,GrapQL,FALCOR

- REST stands for REpresentational State Transfer.

- How exactly do we make our apis RESTful well there are alot of rules outthere but the two important ones

  1.Use HTTP Request Verbs

  2.Use Specific Pattern of Routes/Endpoint URLS

- HTTP Request Verbs

  1.GET

  2.POST

  3.PUT

  4.PATCH

  5.DELETE

- Specific Pattern of Routes/Endpoints
- You might have seen the "/something" while browsing the internet and if you want to go to some perticular place we need to give its name after "/" it is only called as route if we have only "/" it is called as root route.

## Set Up The Basic Server

- initialize the npm inside our project by executing the below command
- `npm init -y`
- second we need to install the express(a nodejs framework) inside our folder where we initialized the npm.

-
