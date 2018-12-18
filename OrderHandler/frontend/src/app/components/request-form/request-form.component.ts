import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Request } from '../../entities/request';

@Component({
  selector: 'request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit, OnChanges {

  @Input() request: Request
  model: Request
  @Output() onSubmit = new EventEmitter<Request>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.request);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    console.log(this.model);
    this.onSubmit.emit(this.model);
  }
}
