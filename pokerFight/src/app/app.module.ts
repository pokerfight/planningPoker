import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './contador/contador.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FooterComponent } from './footer/footer.component';
import { ParticipantesComponent } from './participantes/participantes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContadorComponent,
    AppHeaderComponent,
    QrCodeComponent,
    FooterComponent,
    ParticipantesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
