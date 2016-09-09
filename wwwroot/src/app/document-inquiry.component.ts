import { Component, ElementRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TabService } from './tab/tab.service';
import { Tab, TabState } from './tab/tab.model';
//import { PhoneNumberDirective } from './mask/phone-number.directive';

declare var $: any;

@Component({
    selector: 'search-home',
    template: '<router-outlet></router-outlet>',
})

export class DocumentInquiryHomeComponent { }

@Component({
    selector: 'document-inquiry',
    templateUrl: 'document-inquiry.component.html',
    //directives: [PhoneNumberDirective]
})

export class DocumentInquiryComponent {
    private title = 'Document Inquiry';
    tabs: Tab[] = [];
    number: string;
    suffix: string;
    elementRef: ElementRef;

    constructor(
        private tabService: TabService,
        private router: Router,
        private route: ActivatedRoute,
        @Inject(ElementRef) elementRef: ElementRef) {

        this.elementRef = elementRef;

        tabService.tabSource$.subscribe(
            t => {
                let routerLink = t.routerLink;

                switch (t.state) {
                    case TabState.Removed:
                        this.tabs.splice(t.index, 1); //remove tab

                        if (this.tabs.length > 0)
                            tabService.setActiveTab(tabService.tabsData[this.tabs.length - 1]); //route to first available tab
                        else {
                            routerLink = ['']; //reset
                        }
                        break;
                    case TabState.Added:
                        this.tabs.push(t); //add tab
                        break;
                    case TabState.Switching:
                        t.state = TabState.Normal;
                        this.setSearchInput(t.params);
                        break;
                }

                router.navigate(routerLink);
            });
    }

    /**
     * NG2 does not have a solution as yet to clear forms. For now using jquery.
     */
    clearSearchInput() {
        $(this.elementRef.nativeElement).find("#search-container").find('input').val('');
    }

    setSearchInput(params: any) {
        let ref = $(this.elementRef.nativeElement);
        $.each(params,
            function (k: string, v: string) {
                ref.find('[name="' + k + '"]')
                    .first()
                    .val(v);
            });
    }

    onSelect(tab: Tab) {
        this.tabService.setActiveTab(tab);
    }

    onRemove(tab: Tab) {
        this.tabService.removeTab(tab);
        this.tabService.displayLast();
    }

    //onSelectSearch(viewType: string) {
    //    switch (viewType) {
    //        case "DocumentSearch":
    //            this.tabService.addTab('Document Search', ['/search/document']);
    //            console.log('router nav to document');
    //            break;
    //        case "ContractSearch":
    //            this.tabService.addTab('Contract Search', ['/search/contract']);
    //            console.log('router nav to contract');
    //            break;
    //    }
    //}

    ngOnInit() { }

    ngOnChanges() { }

    ngDoCheck() { }

    ngOnDestroy() { }
}