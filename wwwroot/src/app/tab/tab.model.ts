import { NgZone } from '@angular/core';

export class Tab {
    constructor(public tabName: string) {
    }

    public active: boolean;
    public index: number;
    public state: TabState;
    public zone: NgZone;
    public routerLink: any;
    public params: any;

    public jsonContent: string;
}

export enum TabState {
    Normal,
    Added,
    Removed,
    Switching
}

export enum TabType {
    Document,
    Contract,
    Invoice
}