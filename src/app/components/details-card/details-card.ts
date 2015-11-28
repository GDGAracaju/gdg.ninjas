import {Component, View, NgFor} from "angular2/angular2";

import {LinkModel, MenuItemModel, DetailItemModel} from "../commons/models";

import {GdgCardButtonMenu} from "../commons/card-button-menu/card-button-menu";

import {GdgSingleCardAction} from "../commons/single-card-action/single-card-action";

@Component({
  selector: "details-card"
})
@View({
  templateUrl: "./app/components/details-card/details-card.html"
  ,
  directives: [NgFor, GdgCardButtonMenu, GdgSingleCardAction]
})
export class GdgDetailsCard {
  model = new DetailsCardModel(
    "Detalhes",
    new LinkModel("Leia mais", "#"),
    [new MenuItemModel("Item", "#")],
    [
      new DetailItemModel("Título", "Texto Longo...", new LinkModel("Leia mais","#")),
      new DetailItemModel("Título", "Texto Longo...", new LinkModel("Leia mais","#")),
      new DetailItemModel("Título", "Texto Longo...", new LinkModel("Leia mais","#"))
    ]
  );
}

class DetailsCardModel {
  title: String;
  link: LinkModel;
  details: DetailItemModel[];
  menu: MenuItemModel[];
  constructor(
    title: String,
    link: LinkModel,
    menu: MenuItemModel[],
    details: DetailItemModel[]
  ){
    this.title = title;
    this.link = link;
    this.menu = menu;
    this.details = details;
  }
}
