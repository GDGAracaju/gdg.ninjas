import {Component, View} from "angular2/angular2";

import {LinkModel} from "../models";

@Component({
  selector: "single-card-action",
  properties: ['link']
})
@View({
  templateUrl: "./app/components/commons/single-card-action/single-card-action.html"
})
export class GdgSingleCardAction {
  link: LinkModel;
}
