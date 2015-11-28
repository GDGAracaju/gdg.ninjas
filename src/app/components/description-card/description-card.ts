import {Component, View, NgFor} from "angular2/angular2";

import {LinkModel, MenuItemModel} from "../commons/models";

import {GdgCardButtonMenu} from "../commons/card-button-menu/card-button-menu";

import {GdgSingleCardAction} from "../commons/single-card-action/single-card-action";

@Component({
  selector: "description-card"
})
@View({
  templateUrl: "./app/components/description-card/description-card.html",
  directives: [NgFor, GdgCardButtonMenu, GdgSingleCardAction]
})
export class GdgDescriptionCard{
  model = new DescriptionModel(
    "Título",
    "Descrição",
    new LinkModel("Leia mais", "#"),
    [new MenuItemModel("Leia mais","#")]
  );
}

class DescriptionModel {
  title: String;
  descriptionText: String;
  link: LinkModel;
  menu: MenuItemModel[];

  constructor(
    title: String,
    descriptionText: String,
    link: LinkModel,
    menu: MenuItemModel[]
  ) {
    this.title = title,
    this.descriptionText = descriptionText,
    this.link = link,
    this.menu = menu
  }
}
