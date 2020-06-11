import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  userId: any;
  postsList: any;
  userName: string;

  constructor(private apiService:ApiServiceService,private routers: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.userId = params.get('id');
    }); 
    this.getUsersPosts();
    this.userName = localStorage.getItem('UserName')
  }

  getUsersPosts() {
    this.apiService.getUserPosts(this.userId).subscribe(data=>{
      this.postsList = data;
    })
  }


}
