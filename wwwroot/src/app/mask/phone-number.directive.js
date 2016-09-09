"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var PhoneNumberDirective = (function () {
    function PhoneNumberDirective(model, placeholder, elementRef) {
        this.model = model;
        this.placeholder = placeholder;
        this.elementRef = elementRef;
    }
    PhoneNumberDirective.prototype.onInputChange = function () {
        //let value: string = this.model.value;
        //let lastChar: string = value.charAt(value.length - 1);
        //let format: string;
        //if (lastChar.length == 1)
        //    format = this.placeholder;
        //else
        //    format = value;
        //if (lastChar != "") {
        //    let position = value.length - 1;
        //    let v: string = format.replace("#", lastChar);
        //    this.elementRef.nativeElement.placeholder = v;
        //}
        $(this.elementRef.nativeElement).find("#search-container").find('input').val('');
    };
    PhoneNumberDirective = __decorate([
        core_1.Directive({
            selector: '[phone]',
            host: {
                '(input)': 'onInputChange()'
            }
        }),
        __param(1, core_1.Attribute("placeholder")), 
        __metadata('design:paramtypes', [forms_1.NgModel, String, core_1.ElementRef])
    ], PhoneNumberDirective);
    return PhoneNumberDirective;
}());
exports.PhoneNumberDirective = PhoneNumberDirective;
//# sourceMappingURL=phone-number.directive.js.map