import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { VmvComponent } from "./vmv/vmv.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { ExpertiseComponent } from "./expertise/expertise.component";
import { JoinTeamComponent } from "./join-team/join-team.component";
import { LifeAtJindalComponent } from "./life-at-jindal/life-at-jindal.component";
import { SustainabilityComponent } from "./sustainability/sustainability.component";
import { ProductsComponent } from "./products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { NewsComponent } from "./news/news.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "vision-mission-values",
    component: VmvComponent,
  },
  {
    path: "applications",
    component: ApplicationsComponent,
  },
  {
    path: "expertise",
    component: ExpertiseComponent,
  },
  {
    path: "join-team",
    component: JoinTeamComponent,
  },
  {
    path: "life-at-jindal",
    component: LifeAtJindalComponent,
  },
  {
    path: "sustainability",
    component: SustainabilityComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "gallery-2022",
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
