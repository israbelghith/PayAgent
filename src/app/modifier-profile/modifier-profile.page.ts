import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { AuthentificationService } from '../services/authentification.service';
import { DataService } from '../services/data.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.page.html',
  styleUrls: ['./modifier-profile.page.scss'],
})
export class ModifierProfilePage implements OnInit {

  currentUtilisateur = new Utilisateur();
  constructor(public authService: AuthentificationService,
    private utilisateurService: UtilisateurService,
    private dataService: DataService) { }

  ngOnInit() {
    this.currentUtilisateur=this.dataService.getAgent();
  }
}
