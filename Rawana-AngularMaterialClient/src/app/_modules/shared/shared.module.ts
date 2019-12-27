import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
