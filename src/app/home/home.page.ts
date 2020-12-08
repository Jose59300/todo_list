import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public alertController: AlertController, public toastController: ToastController) {}

  async delete(i) {
    let alert = this.alertController.create({
      title: 'Suppression',
      message: 'Êtes-vous sur de vouloir supprimer cette tâche?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Annuler');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.items.splice(i,1);
          }
        }
      ]
    })
  }
}
