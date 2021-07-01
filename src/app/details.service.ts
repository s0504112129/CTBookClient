import { Injectable } from '@angular/core';
import { detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  detail:detail={lastName:" ",firstName:" ",tzUser:" ",Date:new Date,min:" ",HMO:" ",child:[]}
  constructor(private detailsService:DetailsService) {
    
   }
}
