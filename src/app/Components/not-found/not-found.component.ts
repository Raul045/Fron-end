import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  constructor() {
    var container = document.getElementById('container');
    window.onmousemove = function(e){
        var x = - e.clientX/5,
            y = - e.clientY/5;
        container.style.backgroundPositionX = x + 'px';
        container.style.backgroundPositionY = y + 'px';
    }
   }

  ngOnInit(): void {
  }

}
