import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  info = new FormGroup({
    image: new FormControl(''),
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    comment:new FormControl('',Validators.required),
 });

 journeys = [{
   name:"Lorem",
   age:"3000",
   image:"essen.jpg",
   comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate doloribus omnis nesciunt non voluptas quidem suscipit, officia blanditiis commodi reprehenderit accusamus inventore et molestiae nulla deserunt! Commodi, vel aliquid",
 },{
  name:"Dolor",
  age:"31",
  image:"concert.png",
  comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate doloribus omnis nesciunt non voluptas quidem suscipit, officia blanditiis commodi reprehenderit accusamus inventore et molestiae nulla deserunt! Commodi, vel aliquid",
}]

  constructor() { }
  addjourneys(){

    if(this.info.valid){
      var a = this.info.value;
      /*var b = this.info.value.image.substring(12);
      console.log(b);
      a.image.splice(0, 0, b);*/
      console.log(a);
      this.journeys.push(a);
      console.log(this.journeys);
   }

  }

  ngOnInit(): void {
  }

}
