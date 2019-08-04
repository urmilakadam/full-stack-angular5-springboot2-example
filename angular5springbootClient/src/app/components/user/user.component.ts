import { Component, OnInit } from '@angular/core';
import { User } from '../../module/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  enableAddUser:boolean=true;
  formUser:User;
  users:User[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this._userService.getAllData().subscribe(data=>{
      debugger
      this.users=data;
      console.log("body");
    },(err)=>{
      debugger
      console.log("error");
    });
  }
  getById(id){
    this._userService.getById(id).subscribe(data=>{
      debugger
      
    },
      (err)=>{
        debugger

      });
  }
  addData(data){
    this._userService.addData(data).subscribe(data=>{
        debugger
        window.alert("Record Added successed");
        console.log("deeeeeee");
    },(err)=>{
        debugger
        window.alert("Record Not Added ");
        console.log("deeeeeee");
    });
  }

  editData(data){
    this._userService.editData(data).subscribe(data=>{
      window.alert("Record updated successed");
    },(err)=>{
      window.alert("Record updation problem successed");
    });
  }
  dataOnform(data){
    this.formUser=data;
  }

  removeStudent(stud,i){
    
    this._userService.removeStud(stud.id).subscribe(data=>{
      debugger
      if(data){
        window.alert("User Deleted SuccessFully");
        this.users.splice(i,1);
      }
      else
        window.alert("Error while deleting user");
    },(err)=>{
      debugger
      window.alert(err);
    });
  }
}
