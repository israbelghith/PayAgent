/* eslint-disable @typescript-eslint/prefer-for-of */
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PaiementService } from '../services/paiement.service';
import { Paiement } from '../model/paiement.model';

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
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.listePaiement = this.paiementService.lister();
  }
  transfererPaiement() {
    //  this.listePaiement=this.paiementService.lister();
    console.log(this.listePaiement);

    for (let i = 0; i < this.listePaiement.length; i++) {
      this.p.modePaiement = this.listePaiement[i].mode;
      console.log(this.listePaiement[i].mode);
      this.p.agent = this.listePaiement[i].agent;
      this.p.factures = this.listePaiement[i].factures;
      this.list.push(this.p);
    }
    console.log(this.p);
    this.paiementService.payerFactures(this.list).subscribe((p) => {});
  }
}
