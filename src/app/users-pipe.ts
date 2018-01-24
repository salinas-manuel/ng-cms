import {Pipe, PipeTransform, Component, NgModule} from '@angular/core'
import {UsersComponent} from './users/users.component';

@Pipe({name: 'keys'})
export class UsersPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
