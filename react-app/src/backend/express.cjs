const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(cors())
app.use(express.json())

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'test'
});

app.get('/mueslis', (req, res)=>{
    conn.connect(error=>{
        if (error) console.warn(error)
        else {
            conn.query("SELECT id, name, price FROM mueslis", (err, result, fields)=>{
                if (err) console.warn(err)
                if (result) {
                    console.log('result', result)
                    /*
                    [
                    { id: 1, name: 'Cerbona étcsokis müzli 20g', price: 329 },
                    { id: 2, name: 'Big Corny cereal 31g', price: 619 }
                    ]
                    */
                    console.log('fields', fields)
                    /*
                    [
                    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    `name` VARCHAR(255) NOT NULL,
                    `price` INT NOT NULL
                    ]
                    */

                    fields.forEach(field=>console.log('field type: ', typeof field)) // object

                    res.status(200).json({err, result, fields})
                    /*
                    {
                        "err": null,
                        "result": [
                            {
                                "id": 1,
                                "name": "Cerbona étcsokis müzli 20g",
                                "price": 329
                            },
                            {
                                "id": 2,
                                "name": "Big Corny cereal 31g",
                                "price": 619
                            }
                        ],
                        "fields": [
                            { ...
                    */
                } else {
                    res.sendStatus(403)
                }
            })
        }
    })
})

const port = 3333
app.listen(port, ()=>{
    console.log('Backend runs on port', port)
})
