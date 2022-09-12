import { connection } from "./BaseDatabase"

const deleteTaskByUserId = async (userId: number) => {
    await connection
        .delete()
        .from("TodoListTask")
        .where("creator_user_id", userId)
}

export default deleteTaskByUserId