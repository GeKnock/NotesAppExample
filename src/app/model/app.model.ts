export interface HttpR {
  IMEID?: number;
  request?: string;
  responces?: string;
}

export class ItemBloknot implements HttpR {

  public IMEID?: number;
  public request?: string;
  public responces?: string;
  public isEdit: boolean = false;

  public styles = {boldStyle: false, italicStyle: false, underlineStyle: false, activeButton: {
      actBold: false,
      actItalic: false,
      actUnderline: false,
    }}


  constructor(
    public id: string,
    public title?: string,
    public description?: string,
    public color?: string,
    public colorText?: string,
    public tempData?: HttpR
  ) {

  }

}
