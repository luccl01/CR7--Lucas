import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paragraphs = [{
     description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate doloribus omnis nesciunt non voluptas quidem suscipit, officia blanditiis commodi reprehenderit accusamus inventore et molestiae nulla deserunt! Commodi, vel aliquid",
  }]

  constructor() { }
  change(){
    document.getElementById('result').innerHTML = `You better should be insured!`
  }
  change1(){
    document.getElementById('result').innerHTML = `Flights are a wonderful thing but better keep the environment in mind`
  }
  change2(){
    document.getElementById('result').innerHTML = `Something you really never do in places you live`
  }
  change3(){
    document.getElementById('result').innerHTML = `Lorem ipsum dolor sit amet`
  }

  ngOnInit(): void {
  }

}
