# museum-server
# install and run server:
 - step 1: npm install 
 - step 2: npm start -> server run on port: 5000 ( localhost:5000)
# api
   * [post] sign up: http://localhost:5000/signup <br />*
   form data request: <br />
   `{ <br />
     email: String <br />
     password: String <br />
     name: String <br />
     age: Number <br />
     gender: String <br />
   }`
   - response: 
      - chưa có email: 
               ```{ <br />
                   _id: <br />
                   email: <br />
               }```
      - email đã tồn tại: 
               `{"0"}` 
   *[post] login: http://localhost:5000/login*
   - form data request:
            ```{ <br />
                 email: String <br />
                 password: String <br />
               }```
   - response: 
         - Account đã tồn tại: 
                  `{<br />
                    _id: <br />
                    email: <br />
                  }`
         - Ngược lại: 
                  `{"0"} `
   
   

     
         
