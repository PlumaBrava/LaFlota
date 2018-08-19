import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forumalarios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Variables de entorno (constantes de firebase)
import { environment } from '../environments/environment';


// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Firebase
import { AngularFireModule } from 'angularfire2';                 //modulo principal
import { AngularFirestoreModule } from 'angularfire2/firestore';  //Store
import { AngularFireStorageModule } from 'angularfire2/storage';  //Almacenamiento
import { AngularFireAuthModule } from 'angularfire2/auth';        //Log


//Modulo de Rounting
import { AppRoutingModule } from './/app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { LoginFormComponent } from './users/login-form/login-form.component';




@NgModule({
  declarations: [
    AppComponent,




    HeaderComponent,
    LoginGoogleComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // firebase
    AngularFirestoreModule,   // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,    // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
