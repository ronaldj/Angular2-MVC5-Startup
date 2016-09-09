import { Directive, Input, HostListener, Attribute, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

declare var $: any;

@Directive({
    selector: '[phone]',
    host: {
        '(input)': 'onInputChange()'
    }
})

export class PhoneNumberDirective {
    //private _defaultColor = 'red';
    private el: HTMLElement;

    constructor(private model: NgModel,
        @Attribute("placeholder") private placeholder: string,
        private elementRef: ElementRef) { }

    onInputChange() {
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
    }
}