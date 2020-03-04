import { Injectable } from "@angular/core";
import { Promotion } from './promotion.model';
import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class PromotionRepository{

    constructor(private staticdatasource: StaticDataSource){}

    savePromotion(promo : Promotion) : Observable<Promotion>{
        console.log("Ka");
        return this.staticdatasource.savePromotion(promo);
    }

}