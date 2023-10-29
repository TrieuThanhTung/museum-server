# museum-server
# install and run server:
step 1: npm install <br />
step 2: npm start -> server run on port: 5000 ( localhost:5000)<br />
<br />
# api:
1. [post] sign up: http://localhost:5000/signup<br />
   form data request:<br />
   {<br />
     email: String <br />
     password: String <br />
     name: String <br />
     age: Number <br />
     gender: String <br />
   }<br />
   response: <br />
   chưa có email: <br />
   {<br />
     _id: <br />
     email: <br />
   }
   email đã tồn tại: <br />
   {"0"} <br />
1. [post] login: http://localhost:5000/login<br />
   form data request:<br />
   {<br />
     email: String <br />
     password: String <br />
   }<br />
   response: <br />
   Account đã tồn tại: <br />
   {<br />
     _id: <br />
     email: <br />
   }
   Ngược lại: <br />
   {"0"} <br />
   
   

     
         
