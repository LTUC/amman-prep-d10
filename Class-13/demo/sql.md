### database

- `\l` list all databases
- `\q` quit from database shell 
- `\d` list all tables I have inside the database

go inside your database shell :
    - server is running `sqlstart`
    - `psql`
1. create a new database 
  - `CREATE DATABASE databasename;`

2. create a new table :
    - inside `schema.sql` file :
    ```sql
        CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        column3 datatype,
   ....
);
3. connect my table to my database 
  `psql  -d databasename -f schema.sql`  


4. Write qureis in my server:
    - `npm install pg`
    - In `index.js`:
```js
const url="postgres://username:password@localhost:5432/databaseName" // store it in the .env file
// create a new client instance
const { Client } = require('pg')
const client = new Client(url)
// connect to db
client.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is listening ${PORT}`);
    });
})
```
  - use `client.query()` to do CRUD
