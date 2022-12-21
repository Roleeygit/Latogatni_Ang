/* File: app.component.ts
Author: Juhász Roland
Copyright: 2022, Juhász Roland
Group: Szoft II N
Date: 2022-12-21
Github: https://github.com/Roleygit
Licenc: GNU GPL  */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latogatni';
  name = 'Juhász Roland'; 
  class = 'Szoft II N';
  date = '2022-12-21';

  theme: string = 'white';

  switchTheme() 
  {
    this.theme = this.theme === 'white' ? 'black' : 'white';
    localStorage.setItem('theme', this.theme);
  }


  cities = [
    {
      name: 'Székesfehérvár',
      county: 'Fejér',
      area: 170.89,
      population: 95545
    },
    {
      name: 'Szombathely',
      county: 'Vas',
      area: 97.5,
      population: 78324
    },
    {
      name: 'Sopron',
      county: 'Győr-Moson-Sopron',
      area: 169.04,
      population: 62900
    },
    {
      name: 'Zalaegerszeg',
      county: 'Zala',
      area: 102.42,
      population: 55470
    },
    {
      name: 'Sárvár',
      county: 'Vas',
      area: 64.65,
      population: 15072
    },
    {
      name: 'Lenti',
      county: 'Zala',
      area: 73.79,
      population: 7348
    },
    {
      name: 'Zalakaros',
      county: 'Zala',
      area: 17.17,
      population: 1936
    },

  ];

}
