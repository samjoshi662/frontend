import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import { FooterComponent } from './footer/footer.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { SanctionButtonComponent } from './sanction-button/sanction-button.component';
import { TruncateButtonComponent } from './truncate-button/truncate-button.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SanctionPageComponent } from './SanctionPage/SanctionPage.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { KeywordComponent } from './keyword/keyword.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { ArchivesComponent } from './archives/archives.component';
import { ArchiveTableComponent } from './archive-table/archive-table.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FileUploadComponent,
    TransactionTableComponent,
    SanctionButtonComponent,
    TruncateButtonComponent,
    LoginComponent,
    SanctionPageComponent,
    DashboardComponent,
    DashboardTableComponent,
    KeywordComponent,
    ArchivesComponent,
    ArchiveTableComponent,
    AnalyticsComponent,

    
  ],
  imports: [
    MatSelectModule,
    MatExpansionModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
