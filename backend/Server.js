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
            const q = 'SELECT * FROM reenquery '

            connection.query(q, (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.post('/reenquery', (req, res) => {
            const q = 'INSERT INTO reenquery (`fname`, `lname` ,`phone`,`city`,`email`,`add`,`bday`,`gender`) VALUE ( ? , ? , ? , ? , ? , ? , ? , ? ) '

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

        app.get('/reenquery/get/:id', (req, res) => {

            const userId=req.params.id;

            const q = 'SELECT * FROM reenquery WHERE id=?'

            connection.query(q,[userId], (error, data) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.put('/reenquery/reupdate/:id', (req, res) => {
            const userId = req.params.id
        
            const q = 'UPDATE reenquery SET `fname`=?, `lname`=?, `phone`=?, `city`=?, `email`=?, `add`=?, `bday`=?, `gender`=? WHERE id=? '
        
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

        app.delete('/reenquery/redelete/:id',(req,res)=>{

            const userId =req.params.id;

            const q = 'DELETE from reenquery where id=?'

            connection.query(q,[userId],(error,data)=>{

                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })
        

        // cibil 

        app.get('/cibil',(req,res)=>{

            const q = 'SELECT * FROM cibil '

            connection.query(q,(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.post('/cibil',(req,res)=>{

            const q = ' INSERT INTO cibil (`cid` , `cscore`, `cdate` , `status` , `remark` ) VALUE (?,?,?,?,?) '

            const value=[
                   req.body.cid,
                   req.body.cscore,
                   req.body.cdate,
                   req.body.status,
                   req.body.remark
            ]

            connection.query(q,value,(error,data)=>{

                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.get('/cibil/get/:cid',(req,res)=>{
            const cibilId = req.params.cid;

            const q ='SELECT * FROM cibil WHERE cid=?'

            connection.query(q,[cibilId],(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }
                return res.json(data)
            })
        })

        app.delete('/cibil/cibildelete/:cid',(req,res)=>{

            const cibilId = req.params.cid;

           const q = 'DELETE from cibil where cid=?'

           connection.query(q,[cibilId],(error,data)=>{

            if(error){
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













































