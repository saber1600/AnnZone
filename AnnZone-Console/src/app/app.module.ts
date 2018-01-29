import { HttpModule, BaseRequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpModule,
        NgZorroAntdModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        ScriptLoaderService,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }