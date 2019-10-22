import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TweenLite, TweenMax, TimelineMax, Power4 } from 'gsap';
import Typed from 'typed.js';
import LazyLinePainter from 'lazy-line-painter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'digitalCV';

  ngAfterViewInit(): void {

    const el = document.querySelector('#shape');
    // tslint:disable-next-line: max-line-length
    const myAnimation = new LazyLinePainter(el, { ease: 'easeLinear', strokeWidth: 5, strokeOpacity: 1, strokeCap: 'square', delay: 1000 });
    myAnimation.paint();
    TweenLite.fromTo('.container', 0.5, { backgroundColor: 'black' }, { backgroundColor: '#fff', delay: 1.8 });
    setTimeout(() => {
      this.completeFirstAnime();
    }, 2000);
    TweenLite.fromTo('.more-info', 1, { opacity: 0 }, { opacity: 1, delay: 1.8 });
    TweenLite.fromTo('.btn-more-info', 1, { opacity: 0 }, { opacity: 1, delay: 1.8 });
  }

  completeFirstAnime() {
    const typed1 = new Typed('#typed1', {
      strings: ['Programmer'],
      typeSpeed: 50,
    });
    const typed2 = new Typed('#typed2', {
      strings: ['Designer'],
      startDelay: 1500,
      typeSpeed: 60,
    });
    const typed3 = new Typed('#typed3', {
      strings: ['Dreamer'],
      startDelay: 3000,
      typeSpeed: 60,
    });
  }
}

//Calculate points of polygon by path convertion
// var NUM_POINTS = 100;

// var path = document.getElementById("bYOviKXN5");
// console.log(path);
// var len = path.getTotalLength();
// var points = [];

// for (var i = 0; i < NUM_POINTS; i++) {
//   var pt = path.getPointAtLength((i * len) / (NUM_POINTS - 1));
//   points.push([pt.x, pt.y]);
// }
// let aux = "";
// points.map((item) => {
//   aux += `${item[0]} ${item[1]},`
// });

// console.log("points = ", aux);