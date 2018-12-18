import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../services/request.service"
import { Request } from "../../entities/request";
import { User } from "../../entities/user";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  selectedRequest: Request;
  newRequest: Request;
  filteredRequests: Request[];
  selectedStatus: string;
  
  constructor(
    private requestService: RequestService, private authService: AuthService
  ) { 
  }

  async ngOnInit() {
    this.requests = await this.requestService.getRequests();
    this.selectedStatus = '';
    this.filter();
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filter();
  }

  filter() {
    this.filteredRequests = this.selectedStatus === ''
    ? this.requests
    : this.requests.filter(request => request.status === this.selectedStatus);
  }

  onSelectRequest(request) {
    this.selectedRequest = request;
  }

 
  onFormSubmit(request: Request) {
    this.requestService.createRequest(this.newRequest)
                    .then(createdRequest => {
                        this.requests.push(createdRequest);
                      });
    this.newRequest = null;
  }

  onNewClick() {
    this.newRequest = new Request();
  }


  onDeleteClick(id: number) {
    this.requestService.deleteRequest(id)
    .then(async () => {
      this.selectedRequest = null;
      this.requests = await this.requestService.getRequests();
      this.filter();
    })
  }
  
  onReadyClick(request: Request) {
    this.requestService.readyRequest(request)
    .then(async () => {
      this.selectedRequest = null;
      this.requests = await this.requestService.getRequests();
      this.filter();
    })
  }
  
  onProgressClick(request: Request) {
    this.requestService.progressRequest(request)
    .then(async () => {
      this.selectedRequest = null;
      this.requests = await this.requestService.getRequests();
      this.filter();
    })
  }

}
