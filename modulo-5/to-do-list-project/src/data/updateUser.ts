import { connection } from "./BaseDatabase"

const updateUser = async (id: number, name: string, nickname: string): Promise<any> => {

    await connection("TodoListUser")
        .where("id", id)
        .update({
            name,
            nickname
        })
}

export default updateUser