import {Component, View, NgFor} from "angular2/angular2";

import {LinkModel, MenuItemModel} from "../commons/models";

@Component({
  selector: "rich-description-card"
})
@View({
  directives: [NgFor],
  templateUrl: "./app/components/rich-description-card/rich-description-card.html"
})
export class GdgRichDescriptionCard {
  model = new RichDescriptionModel
  (
    "Título",
    "Descrição",
    new LinkModel("Leia Mais", "#"),
    [new MenuItemModel("Título", "#")]
  );
}

class RichDescriptionModel {
    title: String;
    descriptionText: String;
    link: LinkModel;
    menu: MenuItemModel[];

    constructor(
      title: String,
      descriptionText: String,
      link: LinkModel,
      menu: MenuItemModel[]) {
        this.title = title;
        this.descriptionText = descriptionText;
        this.link = link;
        this.menu = menu;
    }
}
