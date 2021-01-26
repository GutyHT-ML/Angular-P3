import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public name: String;
  public text: String
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.router.snapshot.paramMap.get('name')
    this.name = name
    this.text = "Welcome "+this.name
  }

}
