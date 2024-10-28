import {ItemBloknot} from "./app.model";

export class BloknotDatas {

  private _data: ItemBloknot[];

  constructor() {
    this._data = new Array<ItemBloknot> (
    )
  }

  getData(): ItemBloknot[] {
    return this._data;
  }


}
