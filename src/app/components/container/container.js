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
var footer_1 = require("../footer/footer");
var details_card_1 = require("../details-card/details-card");
var description_card_1 = require("../description-card/description-card");
var horizontal_footer_details_1 = require('../horizontal-footer-details/horizontal-footer-details');
var rich_description_card_1 = require('../rich-description-card/rich-description-card');
var GdgContainer = (function () {
    function GdgContainer() {
    }
    GdgContainer = __decorate([
        angular2_1.Component({
            selector: "gdg-container"
        }),
        angular2_1.View({
            templateUrl: "./app/components/container/container.html",
            directives: [footer_1.GdgFooter, details_card_1.GdgDetailsCard, description_card_1.GdgDescriptionCard, horizontal_footer_details_1.GdgHorizontalFooterDetails, rich_description_card_1.GdgRichDescriptionCard]
        }), 
        __metadata('design:paramtypes', [])
    ], GdgContainer);
    return GdgContainer;
})();
exports.GdgContainer = GdgContainer;
