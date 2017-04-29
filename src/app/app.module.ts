import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , JsonpModule} from '@angular/http';
import { FacebookService } from 'ng2-facebook-sdk';

import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthService } from './auth.service'
import {UserService } from './user.service'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TweedleChartComponent } from './tweedle-chart/tweedle-chart.component';
import { TweedlesComponent } from './tweedles/tweedles.component';
import { TweedleService } from './tweedle.service';
import { AboutComponent } from './about/about.component';
import { routes } from './app.router';
import { CustomloaderComponent } from './customloader/customloader.component';
import { WindowRefService } from './window-ref.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
    declarations: [
        AppComponent,
        FacebookLoginComponent,
        LoadingSpinnerComponent,
        LoadingSpinnerComponent,
        TweedleChartComponent,
        TweedlesComponent,
        AboutComponent,
        CustomloaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ChartsModule,
        routes,
        Ng2Bs3ModalModule
    ],
    providers: [FacebookService, AuthService, UserService, TweedleService, WindowRefService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
