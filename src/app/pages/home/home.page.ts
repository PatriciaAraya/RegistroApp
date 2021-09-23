import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';
import { Usuario } from 'src/app/model/Usuario';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public usuario: Usuario;
  public persona: Persona = new Persona();

  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController) {

// Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
  if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

    // Si tiene datos extra, se rescatan y se asignan a una propiedad
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

  } else {
    /*
      Si no vienen datos extra desde la página anterior, quiere decir que el usuario
      intentó entrar directamente a la página home sin pasar por el login,
      de modo que el sistema debe enviarlo al login para que inicie sesión.
    */
    this.router.navigate(['/login']);
  }
});
}

public ngOnInit() {

}
}





  

  



