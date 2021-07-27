import { HttpClient } from '@angular/common/http';
import {UserModel, UserJSON} from '../model/user.model';
import {config} from '../config/config';
import {Injectable} from "@angular/core";
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  /**
   * create user
   * @param user
   */
  async createUser(user: UserJSON): Promise<UserModel> {
    const model = new UserModel();
    model.setId(user.id);
    model.setNom(user.nom);
    model.setPrenom(user.prenom);
    const response = await fetch(config.baseUrlApiCollegue, {
        method: 'post',
        body: JSON.stringify(model),
        headers: {'Content-Type': 'application/json'}
      }
    );
    return response.json();
  }

  /**
   * find all user
   */
  async findAllUser(): Promise<UserJSON[]> {
    return this.http.get<UserJSON[]>(config.baseUrlApiCollegue).toPromise();
    /*const response = await fetch(config.baseUrlApiCollegue);
    const data: UserJSON[] = await response.json();
    return data.filter(col => col.nom).filter(col => col.email);*/
  }

  /**
   * find user by id
   * @param id
   */
  async findUserById(id: string): Promise<UserModel> {
    const response = await fetch(config.baseUrlApiCollegue + id);
    const data: UserModel = await response.json();
    return data;
  }


  async updateUser(user: UserJSON) {
    const userM = this.findUserById(user.id).then(async (userFind) => {
      const model = new UserModel();
      model.setNom(user.nom);
      model.setPrenom(user.prenom);
      const response = await fetch(config.baseUrlApiCollegue + user.id, {
          method: 'put',
          body: JSON.stringify(model),
          headers: {'Content-Type': 'application/json'}
        }
      );
      return response.json();
    });
  }

}
