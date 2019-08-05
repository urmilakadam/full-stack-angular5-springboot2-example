import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../module/user';

@Pipe({
    name: 'dataFilter'
})
export class dataFilter implements PipeTransform {
    s1: User[] = [];
    transform(users: User[], searchText: string): User[] {

        if (!users || !searchText) {
            return users;
        }
        this.s1 = users.filter(user => user.name.indexOf(searchText) !== -1);
        if (this.s1.length > 0) {
            return this.s1;
        }
        else {
            this.s1 = users.filter(user => user.address.indexOf(searchText) !== -1);
            if (this.s1.length > 0) {
                return this.s1;
            }
            else {
                this.s1 = users.filter(user => user.dept.indexOf(searchText) !== -1);
                if (this.s1.length > 0) {
                    return this.s1;
                }
                else{
                    this.s1 = users.filter(user => user.rollno.indexOf(searchText) !== -1);
                    if (this.s1.length > 0) {
                        return this.s1;
                    }
                }
            }
            
        }
    }

}