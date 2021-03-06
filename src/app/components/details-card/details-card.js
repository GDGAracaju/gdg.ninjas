var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var models_1 = require("../commons/models");
var card_button_menu_1 = require("../commons/card-button-menu/card-button-menu");
var single_card_action_1 = require("../commons/single-card-action/single-card-action");
var GdgDetailsCard = (function () {
    function GdgDetailsCard() {
        this.model = new DetailsCardModel("Detalhes", new models_1.LinkModel("Leia mais", "#"), [new models_1.MenuItemModel("Item", "#")], [
            new models_1.DetailItemModel("Título", "Texto Longo...", new models_1.LinkModel("Leia mais", "#")),
            new models_1.DetailItemModel("Título", "Texto Longo...", new models_1.LinkModel("Leia mais", "#")),
            new models_1.DetailItemModel("Título", "Texto Longo...", new models_1.LinkModel("Leia mais", "#"))
        ]);
    }
    GdgDetailsCard = __decorate([
        angular2_1.Component({
            selector: "details-card"
        }),
        angular2_1.View({
            templateUrl: "./app/components/details-card/details-card.html",
            directives: [angular2_1.NgFor, card_button_menu_1.GdgCardButtonMenu, single_card_action_1.GdgSingleCardAction]
        }), 
        __metadata('design:paramtypes', [])
    ], GdgDetailsCard);
    return GdgDetailsCard;
})();
exports.GdgDetailsCard = GdgDetailsCard;
var DetailsCardModel = (function () {
    function DetailsCardModel(title, link, menu, details) {
        this.title = title;
        this.link = link;
        this.menu = menu;
        this.details = details;
    }
    return DetailsCardModel;
})();
