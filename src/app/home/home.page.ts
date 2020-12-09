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
  items = ['Acheter un pangolin', 'Exterminer les visons', 'Aller a la manif contre l\'article 24', 'Proposer un feat a Emmanuel Macron'];

  async delete(i) {
    let alert = await this.alertController.create({
      header: 'Suppression',
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
    });
    await alert.present();
  }

  async complete(i) {
    let prompt = await this.alertController.create({
      header: 'tache effectué',
      message: 'Êtes-vous sur d\'avoir terminé votre tâche?',
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
    });
    await prompt.present();
  }
}
