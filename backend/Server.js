const mysql = require('mysql')

const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'projectthird'
})

connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('data added on server site')

        app.get('/reenquery', (req, res) => {
            const q = 'SELECT * FROM reenquery r;'

            connection.query(q, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.post('/reenquery', (req, res) => {
            const q = 'INSERT INTO reenquery (`fname`, `lname`,`phone`,`city`,`email`,`add`,`bday`,`gender`) VALUE ( ? , ? , ? , ? , ? , ? , ? , ? ) '

            const values = [
                req.body.fname,
                req.body.lname,
                req.body.phone,
                req.body.city,
                req.body.email,
                req.body.add,
                req.body.bday,
                req.body.gender

            ]
            connection.query(q, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.get('/reenquery', (req, res) => {
            const userId = req.params.id

            const q = 'UPDATE reenquery set `fname`=? , `lname`=?`, `phone`=? , `city`=? , `email`=? , `add`=? ,`bday`=? , `gender`=?  WHERE id=? '

            const values = [
                req.body.fname,
                req.body.lname,
                req.body.phone,
                req.body.city,
                req.body.email,
                req.body.add,
                req.body.bday,
                req.body.gender,
                userId
            ]

            connection.query(q, values, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })

        })
    }
})

app.listen(7001, () => {
    console.log('port 7001 login by server site...')
})













































