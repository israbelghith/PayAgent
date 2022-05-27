import { PaiementPage } from './../paiement/paiement.page';
/* eslint-disable @typescript-eslint/prefer-for-of */
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PaiementService } from '../services/paiement.service';
import { Paiement } from '../model/paiement.model';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-historique-paiement',
  templateUrl: './historique-paiement.page.html',
  styleUrls: ['./historique-paiement.page.scss'],
})
export class HistoriquePaiementPage implements OnInit {
  listePaiement = [];
  listeData = [];
  list = [];
  p = new Paiement();
  constructor(
    private paiementService: PaiementService,
    private toast: ToastController,
    private dataService: DataService,
    private factureService: FactureService
  ) {}

  ngOnInit(): void {
    this.listePaiement = this.paiementService.lister();
    console.log(this.listePaiement);

  }
  transfererPaiement() {

    console.log(this.listePaiement);
      for (let i=0;i < this.listePaiement.length;i++) {

    console.log(this.listePaiement[i].paiement);
      this.list.push(this.listePaiement[i].paiement);
     //
     this.paiementService.payerFactures(this.listePaiement[i].paiement).subscribe(paiementeffec=>{
       console.log('le paiement efectué est', paiementeffec);
       const facturesList=this.listePaiement[i].paiement.factures;
       for(let j=0; j<facturesList.length ;j++)
       {
          facturesList[j].paiement=paiementeffec;
          console.log('inside the fact : ',facturesList[j].paiement);
       }
       this.paiementService.modifierFactures(facturesList).subscribe(paiement=>{

            console.log('le paiement des factures effectué',paiement);
       });
       console.log(facturesList);
     });
  }

    console.log(this.list);
    this.paiementService.payerFactures(this.listePaiement).subscribe();
 //   console.log(this.dataService.getAgent());
  }

}
