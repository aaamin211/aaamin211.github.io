import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  bioInfo = [
    {property: 'Name',value: 'Md. Abdullah Al Amin'},
    {property: 'Date of Birth',value: '18th December,1995'},
    {property: 'Height',value: `5'11"`},
    {property: 'Parmanent Address',value: 'College para , Nachole Pourashava, Nachole, Chapai Nawabgonj'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
