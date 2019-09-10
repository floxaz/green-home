import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    showHome: boolean = false;
    showSolutions: boolean = false;
    showLifestyle: boolean = false;
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                switch(e.url) {
                    case '/':
                        this.showHome = false;
                        this.showSolutions = true;
                        this.showLifestyle = true;
                        break;
                    case '/solutions':
                        this.showHome = true;
                        this.showSolutions = false;
                        this.showLifestyle = true;
                        break;
                    case '/lifestyle':
                        this.showHome = true;
                        this.showSolutions = true;
                        this.showLifestyle = false;
                        break;
                    default:
                        this.showHome = true;
                        this.showSolutions = true;
                        this.showLifestyle = true;
                }
            }
        });
    }
}