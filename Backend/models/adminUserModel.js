import mongoos from 'mongoose'


const adminUserSchema = new mongoos.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { minimize: false })

const adminUserModel = mongoos.model.adminuser || mongoos.model("adminUser", adminUserSchema)


export default adminUserModel