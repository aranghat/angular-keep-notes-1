import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NotesService } from 'src/app/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   ],
  imports: [ 
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
