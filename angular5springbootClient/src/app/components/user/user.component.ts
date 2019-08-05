import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../module/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]=[];
  searchText: string;
  replaceBit:boolean=false;
  @ViewChild ('userForm')form:any;
  user1 = new User();
  showSave: boolean = false;
  showUpdate: boolean = false;

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
      this.replaceBit=true;
    },(err)=>{
      window.alert("Record updation problem successed");
    });
  }
 
  removeUser(stud,i){
    
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

  formEnabled(){
    debugger
    this.showUpdate=false;
    this.showSave=true;
    this.form.reset();
  }
  onSubmit(userForm: any) {
    debugger
    if (!userForm.valid) {
      console.log("Form is invalid ");
    } else {
      if (this.showUpdate == false) {
        this.users.push(userForm.value);
        this.addData(userForm.value);
        userForm.reset();
        this.showSave=false;
        console.log(this.users);
      } else {
        this.editData(userForm.value);
        if(this.replaceBit){
          this.replaceDataInFrontEnd(userForm.value);        
        }
        userForm.reset();
        this.showSave=false;
      }
    }
  }
  replaceDataInFrontEnd(data){
    debugger
    for(var i=0;i<this.users.length;i++){
        if(this.users[i].id===data.id){
          this.users[i]=data;
        }
    }
  }
  atForm(i: any) {
    this.showUpdate = true;
    this.showSave=true;
    if (this.showUpdate == true) {
      this.user1 =this.users[i];
    }
  }
  clearAll(userForm: any) {
    userForm.reset();
    this.showUpdate = false;
    this.showSave = false;
  }

}
