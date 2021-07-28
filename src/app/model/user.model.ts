export class UserModel {
  // @ts-ignore
  private id: string;
  // @ts-ignore
  private nom: string;
  // @ts-ignore
  private prenom: string;
  // @ts-ignore
  private email: string;


  constructor() {
  }

  public getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string) {
    this.nom = nom;
  }

  getPrenom(): string {
    return this.prenom;
  }

  setPrenom(prenom: string) {
    this.prenom = prenom;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

}

export interface UserJSON {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  photo: string;
}

export interface UserCard {
  pseudo: string;
  nom: string;
  prenom: string;
  score: number;
  photoUrl: string;
}
