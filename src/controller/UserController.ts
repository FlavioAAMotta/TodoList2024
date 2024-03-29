import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController{
    private userBusiness: UserBusiness;
    constructor(userBusiness: UserBusiness){
        this.userBusiness = userBusiness;
    }


    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const token = await this.userBusiness.signup(name, email, password);
            res.status(200).send({ token });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}
