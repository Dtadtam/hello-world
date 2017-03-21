"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_edit_component_1 = require("./product-edit.component");
var product_guard_services_1 = require("./product-guard.services");
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'ProductDetail/:id', canActivate: [product_guard_services_1.ProductDetailGuard],
                    component: product_detail_component_1.ProductDetailComponent },
                { path: 'productEdit/:id', canDeactivate: [product_guard_services_1.ProductEditGuard],
                    component: product_edit_component_1.ProductEditComponent
                }
            ])
        ],
        exports: [router_1.RouterModule],
        providers: [product_guard_services_1.ProductDetailGuard]
    })
], ProductRoutingModule);
exports.ProductRoutingModule = ProductRoutingModule;
;
//# sourceMappingURL=product-routing.module.js.map