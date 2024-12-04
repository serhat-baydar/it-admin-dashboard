const express = require('express');  
const mysql = require('mysql2');  
const cors = require('cors');  

const app = express();  
app.use(cors());  

const db = mysql.createConnection({  
  host: 'miazrvul01.mysql.database.azure.com',  
  user: 'migvulsqladmin',  
  password: 'Has9988!!',  
  database: 'assesment',
    port: 3306,
});  

db.connect(err => {  
  if (err) {  
    console.error('Error connecting to the database:', err);  
    return;  
  }  
  console.log('Connected to the MySQL database.');  
});  

app.get('/api/data', (req, res) => {  
  db.query('SELECT * FROM your_table', (err, results) => {  
    if (err) {  
      return res.status(500).json({ error: err });  
    }  
    res.json(results);  
  });  
});  

const PORT = 3306;  
app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);  
});  