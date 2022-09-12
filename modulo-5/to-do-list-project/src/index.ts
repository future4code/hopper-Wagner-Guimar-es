import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'




const app = express()

app.use( cors() )
app.use( express.json() )
app.post( "/user", createUser )
app.get( "/user/:id", getUserById )
app.put( "/user/edit/:id", editUser )
app.post( "/task", createTask )

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const adress = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${adress.port}`);
    } else {
      console.error(`Failure upon starting server`);
    }
  });