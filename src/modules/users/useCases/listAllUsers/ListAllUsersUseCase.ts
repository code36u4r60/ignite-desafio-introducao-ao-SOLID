import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("How did you get here if you don't exist?");
    }

    if (!user.admin) {
      throw new Error(
        "Area restricted. You don't have the authorization to execute this request."
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
