# museum-server  

## install and run server:
 - step 1: npm install
 - step 2: npm start -> server run on port: 5000 ( localhost:5000)
## api  
1. Sign up [POST]
   - require data:
      ```
        email: { type: String, default: '' },
        password: { type: String, default: '' },
        name: {type: String, default: ''},
        age: {type: Number, default: 0},
        gender: {type: String, default: null},
      ```
   - response:
      - success
      ```
      _id:
      email:
      ```
      - fail (user already exists):
      ```
      '0'
      ```
2. Login [POST]
   - require data:
     ```
     email: { type: String, default: '' },
     password: { type: String, default: '' }
     ```
   - response:
       - success
        ```
        _id:
        email:
        ```
       - fail (user doesn't exist || wrong password):
        ```
        '0'
        ```
3. Get data "Trung bay"
   - URL: http://localhost:5000/gallery - MAIN
   - URL: http://localhost:5000/gallery/:titleParam
     - example: http://localhost:5000/gallery/trung-bay-thuong-xuyen-p1
   
  
  
   
   

     
         
