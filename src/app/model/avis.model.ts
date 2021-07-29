export interface UserModel {
  pseudo: string,
  nom: string,
  prenom: string,
  photo: string,
  score: number
}

export interface UserModelScore {
  collegue: UserModel,
  avis: AvisEnum
}


export interface PostModel {
  pseudo: string,
  avis: string
}

export enum AvisEnum {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}
