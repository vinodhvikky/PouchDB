import { Component, OnInit, NgZone } from '@angular/core';
import { PouchDBService } from './pouchdb.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public posters: Array<any>;
    public cities: Array<any>;
    public deleteposters: Array<any> = [];
    public selectedcount = 0;
    public form: any;
    public city: string;
    public constructor(private database: PouchDBService, private zone: NgZone) {
        this.posters = [];
        this.city = 'kc';
        this.cities = [ 'kc', 'dc', 'tm' ];
        // this.form = {
        //     "username": "",
        //     "firstname": "",
        //     "lastname": ""
        // }
    }

    public ngOnInit() {
        this.database.sync("http://cdb.citypost.us:4984/posters");
        this.database.getChangeListener().subscribe(data => {
            for(let i = 0; i < data.change.docs.length; i++) {
                this.zone.run(() => {
                    this.posters.push(data.change.docs[i]);
                });
            }
        });
        this.database.fetch().then(result => {
            this.posters = [];
            for(let i = 0; i < result.rows.length; i++) {
                this.posters.push(result.rows[i].doc);
            }
        }, error => {
            console.error(error);
        });
    }
    public deletePosters() {
      this.deleteposters = this.posters.filter( p => p.delete === true );
      console.log(this.deleteposters.length);
    }



    // public insert() {
    //     if(this.form.username && this.form.firstname && this.form.lastname) {
    //         this.database.put(this.form.username, this.form);
    //         this.form = {
    //             "username": "",
    //             "firstname": "",
    //             "lastname": ""
    //         }
    //     }
    // }

}
