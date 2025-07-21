import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface IUser{
    name:string;
    password:string;
    email:string;
}

class CreateUserService{
    async execute({name, password, email}: IUser){
        if(!email){
            throw new Error('incorrect')
    }
    const userAlreadyExist = await prismaClient.user.findFirst({
        where: {email}
    })
    if(userAlreadyExist){
        throw new Error('this email already exist')
    }
    const passwordHash = await hash(password, 8)
    const user = await prismaClient.user.create({
        data:{
            name,
            email,
            password: passwordHash
        },
        select:{
            id:true,
            name:true,
            email:true
        }
    })
    return user
}
}

export {CreateUserService}