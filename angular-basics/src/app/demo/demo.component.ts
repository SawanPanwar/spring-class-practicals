import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  form: any = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submitted!', this.form);
  }

}
