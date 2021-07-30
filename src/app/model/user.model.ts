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

/**
 *
 "id": "6c8be60e",
 "nom": "MOREAU",
 "prenom": "Quentin",
 "societe": "DIGINAMIC",
 "email": "quentinmoreauh@hotmail.com",
 "dateNaissance": "1959-11-17T08:06:49 -01:00",
 "sexe": "male",
 "adresse": "85580 BIARD",
 "password": "$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra",
 "photo": "https://randomuser.me/api/portraits/men/93.jpg",
 "departement": "DSI/DEV/Java1"
 */
export interface UserJSON {
  id: string;
  nom: string;
  prenom: string;
  societe: string;
  email: string;
  dateNaissance: Date;
  sexe: string;
  adresse: string;
  password: string;
  photo: string;
  departement: string;
}

export interface UserCard {
  id: string;
  nom: string;
  prenom: string;
  societe: string;
  email: number;
  photo: string;
  departement: string;
}
