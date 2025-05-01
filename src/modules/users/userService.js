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

  async getAll(){
    return await userDao.getAll();
  }

  async update(id, data) {
    return await userDao.update(id, data);
  }

}

export const userService = new UserService();