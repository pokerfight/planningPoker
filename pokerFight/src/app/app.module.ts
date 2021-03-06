import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatInputModule, MatSelectModule } from "@angular/material";

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ContadorComponent } from './contador/contador.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FooterComponent } from './footer/footer.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { HttpClientModule } from "@angular/common/http";


/* Services */
import { ChatService } from './services/chat.service';
import { LoginService } from './services/login.service';
import { UtilsService } from './services/utils.service';
import { DialogSubscriptionComponent } from './dialogs/dialog-subscription/dialog-subscription.component';
import { FooterProgressComponent } from './footer-progress/footer-progress.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContadorComponent,
    AppHeaderComponent,
    QrCodeComponent,
    FooterComponent,
    ParticipantesComponent,
    DialogSubscriptionComponent,
    FooterProgressComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule ,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    ChatService,
    LoginService,
    UtilsService
  ],
  entryComponents: [
    DialogSubscriptionComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
