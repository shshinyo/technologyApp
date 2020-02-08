import { Component, OnInit } from '@angular/core';
import { authService } from './user/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authserv:authService){
  }
  ngOnInit(): void {
 this.authserv.checkauthstatus().subscribe();

}}
