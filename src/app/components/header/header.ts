import {Component, View} from "angular2/angular2";

@Component({
  selector: "gdg-header",
  properties: ["title"]
})
@View({
  templateUrl: "./app/components/header/header.html"
})
export class GdgHeader{
  title: string;
}
