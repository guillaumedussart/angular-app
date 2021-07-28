export class VoteModel {
  // @ts-ignore
  protected like: boolean;
  // @ts-ignore
  private collegue_id: string;

  getCollegueId(): string {
    return this.collegue_id;
  }

  setCollegueId(value: string) {
    this.collegue_id = value;
  }

  getLike(): boolean {
    return this.like;
  }

  setLike(value: boolean) {
    this.like = value;
  }
}


export interface VoteModelJson {
  collegue_id: string;
  like: boolean;
}
