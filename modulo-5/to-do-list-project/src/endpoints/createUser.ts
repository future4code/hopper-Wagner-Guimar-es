import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { NewUser } from "../types";

const createUser = async ( req: Request, res: Response ) => {

    try {

        const { name, nickname, email } = req.body;
        if ( !name || !nickname || !email ) {
            res.statusCode = 404;
            throw new Error( "Preencha todos os campos" );
        }

        const newUser: NewUser = {
            name,
            nickname,
            email,
        };

        await insertUser( newUser );
        res.status( 200 ).send( "Usuário criado com sucesso" );

    } catch ( error: any ) {
        
        if ( res.statusCode == 200 ) {
            res.status( 500 ).send( error.message );
        } else {
            res.status( res.statusCode ).send( error.message );
        }
    }
};

export default createUser;
