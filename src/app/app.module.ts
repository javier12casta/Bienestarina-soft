import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ServicioService } from './servicio.service';
import { AuthService } from './providers/auth.service';
import {AlertController} from '@ionic/angular';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({


  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
    
    BrowserModule, 
    HttpClientModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    
  ],
    providers: [ 
    ServicioService,
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [
    AppComponent,  
  ],
  
})
export class AppModule {

 
}
