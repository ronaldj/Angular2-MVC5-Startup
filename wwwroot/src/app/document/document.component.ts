import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { TabService } from '../tab/tab.service';
import { Tab, TabType, TabState } from '../tab/tab.model';
import { DocumentService } from './document.service';
import { DocumentModel } from './document.model';

@Component({
    selector: 'document',
    templateUrl: 'document.component.html',
    providers: [DocumentService]
})

export class DocumentComponent {
    private model: DocumentModel;
    private documentNumber: string;
    private documentSuffix: string;
    private sub: any;
    tabType = TabType;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tabService: TabService,
        private documentService: DocumentService) {
    }

    onRetrieve() {
        let activeTab = this.tabService.getActiveTab();

        if (activeTab != null) {
            activeTab.tabName = this.documentNumber + ' ' + this.documentSuffix;

            activeTab.routerLink = [
                '/search/document',
                this.documentNumber,
                this.documentSuffix
            ]

            this.tabService.bindToTab(
                activeTab,
                {
                    documentNumber: this.documentNumber,
                    documentSuffix: this.documentSuffix
                });
        }
    }

    page(direction: number) {
        let activeTab = this.tabService.tabsData.filter((t) => t.active == true)[0];

        if (activeTab != null) {
            activeTab.tabName = this.documentNumber + ' ' + this.documentSuffix;

            activeTab.routerLink = [
                '/search/document',
                this.documentNumber,
                this.documentSuffix
            ]

            this.documentService.page(direction, this.documentNumber, this.documentSuffix)
                .then((d: any) => {
                    this.documentNumber = d.documentNumber;
                    this.documentSuffix = d.documentSuffix;
                    this.onRetrieve();
                });
        }
    }

    IsSipp()
    {

    }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                let documentNumber = params['documentNumber'];
                let documentSuffix = params['documentSuffix'];

                this.documentService.getDocument(documentNumber, documentSuffix)
                    .then((d: any) => {
                        this.model = d;

                        if (d) {
                            //add tab with data
                            this.documentNumber = d.documentNumber;
                            this.documentSuffix = d.documentSuffix;

                            if (this.tabService.tabsData.length == 0) {
                                this.tabService.addTab(
                                    this.documentNumber + ' ' + this.documentSuffix,
                                    ['/search/document', this.documentNumber, this.documentSuffix]
                                );
                            }
                        } else {
                            //add default tab
                            if (this.tabService.tabsData.length == 0) {
                                this.tabService.addTab('Document Search', ['/search/document']);
                            }
                        }
                    });
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe(); //prevent memory leak
    }
}

@Component({
    selector: 'document-home',
    template: '<router-outlet></router-outlet>'
})
export class DocumentHomeComponent { }