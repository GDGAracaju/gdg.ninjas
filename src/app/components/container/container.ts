import {Component, View} from "angular2/angular2";

import {GdgFooter} from "../footer/footer";

import {GdgDetailsCard} from "../details-card/details-card";

import {GdgDescriptionCard} from "../description-card/description-card";

import {GdgHorizontalFooterDetails} from '../horizontal-footer-details/horizontal-footer-details';

import {GdgRichDescriptionCard} from '../rich-description-card/rich-description-card';

@Component({
  selector: "gdg-container"
})
@View({
  templateUrl: "./app/components/container/container.html",
  directives: [GdgFooter,GdgDetailsCard, GdgDescriptionCard, GdgHorizontalFooterDetails,GdgRichDescriptionCard]
})
export class GdgContainer{}
