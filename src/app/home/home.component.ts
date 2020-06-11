import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: any;
  constructor(private apiService: ApiServiceService, private routers: Router) {

  }
  getUserDetails() {
    this.apiService.getUser(this.userName).subscribe(data => {
      if (data.length > 0) {
        localStorage.setItem('UserName', data[0]['name']);
        let id = data[0]['id']
        this.routers.navigate(['/posts', id]);
      }
      else {
        this.getModel();
      }
    })
  }

  getModel() {
    let Swal = require('sweetalert2')
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "We couldn't find the user!",
    })
  }

  ngOnInit(): void {
    localStorage.clear();
  }

}
