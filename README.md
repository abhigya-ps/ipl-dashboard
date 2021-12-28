## Indian Premier League Cricket Dashboard
<i> Java Spring Boot, ReactJS, AWS </i>

Developed a dashboard that displays match results of teams in the Indian Premier Cricket League. This project uses React 
(funtional components and hooks) to build reusable components for the frontend which interacts with an API built with 
Spring Boot which reads data from an in-memory database. Spring Batch is used to import match data from a CSV file into the
in-memory database.

### React Frontend
- <i>Router</i> : stores URLs that direct application flow to various components based on the user's clicks and displays selected components
- <i>Components</i> : holds UI objects as well as logic to display and manipulate objects which make up the body and structure of the frontend
- <i>Service</i> : contains calls to the Java API via mainly GET requests and passes incoming JSON data to various components for display

### Java Spring Boot Backend
- <i>Controller Layer</i> : contains the API routes and processes web requests which is then directed to methods in the repository layer
- <i>Repository Layer</i> : stores logic necessary to interact with the database, including mostly GET requests to retrieve list of teams, past matches, or match details
- <i>Model Layer</i> : object-oriented design involving classes that store match data with corresponding column headers as class properties, and includes methods to retrieve or modify each property

<i> This web application was packaged and deployed through AWS Elastic Beanstalk. </i>

 <img src="https://github.com/abhigya-ps/ipl-dashboard/blob/main/src/main/resources/ipl-dashboard-demo.JPG" alt="demo_team" align="center">
