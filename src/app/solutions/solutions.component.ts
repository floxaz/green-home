import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // this.route.url.subscribe(url => {
        //     console.log(url[0].path);
        // })
    }

}