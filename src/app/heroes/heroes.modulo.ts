import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
 
@NgModule({
  declarations:[
      HeroeComponent,
      ListadoComponent
  ],
  exports:[
      ListadoComponent
  ],
  imports:[
      CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HeroesModule{}