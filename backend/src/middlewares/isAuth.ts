import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";


interface PayLoad{
    sub: string;
}

export function isAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    console.log("Token não enviado");
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, process.env.SECRET_JWT) as PayLoad;
    req.user_id = sub;
    return next();
  } catch (error) {
    console.log("Erro na verificação do token:", error);
    return res.status(401).end();
  }
}
