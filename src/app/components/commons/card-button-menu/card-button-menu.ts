import {Component, View, NgFor} from "angular2/angular2";

import {MenuItemModel} from "../models";

@Component({
  selector: "card-button-menu",
  properties: ['menu']
})
@View({
  templateUrl: "./app/components/commons/card-button-menu/card-button-menu.html",
  directives: [NgFor]
})
export class GdgCardButtonMenu {
  menu: MenuItemModel[]
}
