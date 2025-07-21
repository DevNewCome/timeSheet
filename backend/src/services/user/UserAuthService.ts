import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface IAuth {
  email: string;
  password: string;
}

class UserAuthService {
  async execute({ email, password }: IAuth) {
    // Verifica se o usuário existe no banco
    const user = await prismaClient.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("E-mail ou senha inválidos.");
    }

    // Compara as senhas
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("E-mail ou senha inválidos.");
    }

    // Gera o token JWT
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_JWT as string,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    // Retorna os dados do usuário + token
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { UserAuthService };
