import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
import { PostsRoutingModule } from './posts/posts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
   UserModule,
   UserRoutingModule,
   PostsModule,
   PostsRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
