import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { CargarPersonaComponent } from './components/cargar-persona/cargar-persona.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';

import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CdkTableModule} from '@angular/cdk/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CargarPersonaComponent,
    ListadoPersonasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSliderModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    CdkTableModule,
    NgbModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
