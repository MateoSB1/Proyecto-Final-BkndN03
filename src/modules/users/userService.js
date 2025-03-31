import { generateUsersMocks } from "../../mock/userMock.js";
import { userDao } from "./userDAO.js";

class UserService{
  async createUsersMocks(amount){
    const users = generateUsersMocks(amount);

    await userDao.removeAll();

    for( const user of users) {
      await userDao.create(user);
    }

    return users;
  }


}

export const userService = new UserService();