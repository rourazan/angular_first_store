import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'rohwinzon';
  age = 18;
  img = 'https://imagen.research.google/main_gallery_images/an-alien-octopus-floats.jpg';
  btnDisabled =  true;
  person = {
    name: 'Rohwinzon',
    age: 18,
    avatar: 'https://imagen.research.google/main_gallery_images/an-alien-octopus-floats.jpg'
  }

  toogleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event?.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event?.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
