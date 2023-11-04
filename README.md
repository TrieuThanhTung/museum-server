# museum-server
# install and run server:
 - step 1: npm install 
 - step 2: npm start -> server run on port: 5000 ( localhost:5000)

# api:
    *[post] sign up: http://localhost:5000/signup*
    - form data request: <br />
   `{
     email: String 
     password: String 
     name: String 
     age: Number 
     gender: String 
   }`
   - response: 
   - chưa có email: 
            ```{
                _id: 
                email: 
            }```
   - email đã tồn tại: 
   {"0"} 
    *[post] login: http://localhost:5000/login*
   - form data request:
   ```{
     email: String 
     password: String 
   }```
   - response: 
   - Account đã tồn tại: 
   `{
     _id: 
     email: 
   }`
   - Ngược lại: 
   `{"0"} `
   
   

     
         
