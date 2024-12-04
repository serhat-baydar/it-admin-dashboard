const express = require('express');  
const mysql = require('mysql2');  
const cors = require('cors');  

const app = express();  
app.use(cors());  

const db = mysql.createConnection({  
  host: 'mxxxxxxm',  
  user: 'xxxxx',  
  password: 'xxx',  
  database: 'xxxx',
    port: xxx,
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
