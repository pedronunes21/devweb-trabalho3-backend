import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { hash } from "bcrypt"

export class CreateUserService {

    async execute(props: CreateUserRequest) {
        const userRepo = AppDataSource.getRepository(User);

        const { email, password } = props;

        if (await userRepo.findOne({
            where: { email }
        })) {
            return {
                status: 400,
                message: "O email já está em uso."
            }
        }

        if (password.length < 8) {
            return { status: 400, message: "Senha deve ter pelo menos 8 caracteres." }
        }
        if (password.search(/[a-z]/) < 0) {
            return { status: 400, message: "A senha deve conter pelo menos 1 letra minúscula." }
        }
        if (password.search(/[A-Z]/) < 0) {
            return { status: 400, message: "A senha deve conter pelo menos 1 letra maiúscula." }
        }
        if (password.search(/[0-9]/) < 0) {
            return { status: 400, message: "A senha deve conter pelo menos 1 número." }
        }
        console.log(password)
        const hashedPassword = await hash(password, 10)

        const user = userRepo.create({
            email,
            password: hashedPassword
        })

        try {
            userRepo.save(user)
        } catch (err) {
            return {
                status: 500,
                message: "Ocorreu algum erro ao salvar o usuário!"
            }
        }

        return {
            status: 201,
            message: "Usuário criado com sucesso",
            data: {
                id: user.id,
                email: user.email
            }
        }
    }

}