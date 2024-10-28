import {BloknotDatas} from "./app.sources"
import {ItemBloknot} from "./app.model";

export class Model {

  private simpleData: BloknotDatas;
  private dataBloknot: ItemBloknot[];

  constructor () {
    this.simpleData = new BloknotDatas() //Зарузка данных из источника
    this.dataBloknot = new Array<ItemBloknot> () //Подготовка массива для сохраненные данные для последующего добавления и обновления
    this.simpleData.getData().forEach((item) => {this.dataBloknot.push(item)}); //Перебор загруженных данных и передача их в новый массив
  }

  getDatasBloknot (): ItemBloknot[] {
    return this.dataBloknot
  }

  getDatasBloknotForIndex (index: number): ItemBloknot {
    return <ItemBloknot>this.dataBloknot.find(p => index === Number(p.id))
  }

  addDatasBloknotElement (item: ItemBloknot) {
    this.dataBloknot.push(item)
  }

  deleteDatasBloknotElementForIndex (index: number) {
    this.dataBloknot.splice(index, 1)
  }
}
