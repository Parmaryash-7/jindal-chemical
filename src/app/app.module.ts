import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ProductsComponent } from './products/products.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { LifeAtJindalComponent } from './life-at-jindal/life-at-jindal.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VmvComponent } from './vmv/vmv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertiseComponent,
    ApplicationsComponent,
    ProductsComponent,
    SustainabilityComponent,
    LifeAtJindalComponent,
    JoinTeamComponent,
    ContactComponent,
    AboutUsComponent,
    VmvComponent,
    NewsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
