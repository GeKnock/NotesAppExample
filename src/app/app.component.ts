import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model } from "./model/app.repository"
import { ItemBloknot } from "./model/app.model";
import { NgClass, NgForOf, NgIf, NgStyle } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule, NgStyle, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public inputV: string = "";
  private config = {
    texts: {
      h1_title: "Заметки",
      edit_block_button: "Добавить",
      edit_block_span: "Количество всего",
      block_content_div_button_add: "Редактировать",
      block_content_div_button_del: "Удалить",
      view_send_form_span: "Вывод"
    },
    classList : {

    }
  };
  private modelData = new Model();

  constructor() {
  }

  ngOnInit () {
    if (typeof localStorage !== 'undefined') {
      this.loadToAsStorage();
    }
  }

  APP () {
    return this.config;
  }

  getLenghtItemBloknot (): number {
    return this.modelData.getDatasBloknot().length
  }

  getData (): ItemBloknot[] {
    return this.modelData.getDatasBloknot()
  }

  clearData (): void {
    this.getData().length = 0
  }

  addResourseDataLast() {
    this.modelData.addDatasBloknotElement(new ItemBloknot("x" + this.getRandomID(99999999), this.inputV, this.inputV))
  }

  deleteRes(id: string, index: number) {
    this.modelData.deleteDatasBloknotElementForIndex(index);
    localStorage.removeItem(id)
  }

  saveToAsStorage() {
    localStorage.setItem("example", JSON.stringify(this.getData()))
  }

  loadToAsStorage() {
    this.clearData()
    if (localStorage.length !== 0) {
      const storage = JSON.parse(<string>localStorage.getItem("example"))
      let arrayData = this.getData()
      for (const item of storage) {
        arrayData.push(<ItemBloknot>item)
      }
    }
  }

  clearToAsStorage() {
    this.clearData()
  }

  getRandomID (num: number): number {
    return Math.floor(Math.random() * num)
  }

  clearForm(input: HTMLInputElement) {
    input.value = "";
    this.inputV = "";
  }

  toogleBoldText(item: ItemBloknot) {
    item.styles.boldStyle = !item.styles.boldStyle;
    item.styles.activeButton.actBold = !item.styles.activeButton.actBold;
  }

  toogleItalicText(item: ItemBloknot) {
    item.styles.italicStyle = !item.styles.italicStyle;
    item.styles.activeButton.actItalic = !item.styles.activeButton.actItalic;
  }

  toogleUnderlineText(item: ItemBloknot) {
    item.styles.underlineStyle = !item.styles.underlineStyle;
    item.styles.activeButton.actUnderline = !item.styles.activeButton.actUnderline;
  }
}
