/**
 *"avis": "AIMER",
 "dateCreation": "2021-07-28T14:15:09.507056Z"
 */
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
