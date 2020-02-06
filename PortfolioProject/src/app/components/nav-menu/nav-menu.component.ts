import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Toggle() {
    let mobileNav = document.getElementById("mobile-nav");
    let menuBars = document.getElementById("menu-bars");
    mobileNav.classList.toggle("nav-expand");
    menuBars.classList.toggle("change");
  }

  SidebarOn() {
    let nav = document.getElementById("desktop-nav");
    let toggle = document.getElementById("sidebar-toggle");
    nav.classList.remove("display-none");
    toggle.classList.add("display-none");

  }

  SidebarOff() {
    let nav = document.getElementById("desktop-nav");
    let toggle = document.getElementById("sidebar-toggle");
    nav.classList.add("display-none");
    toggle.classList.remove("display-none");
  }

}
