import { Component, OnInit, Signal, WritableSignal, effect, signal, Injector, untracked, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../core/users.service';
import { Users } from '../common/interfaces/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users!: Signal<Users[]>;
  public age: WritableSignal<number> = signal(0);
  public totalAge: Signal<number> = computed(() => this.age() * 2);
  constructor(private usersService: UsersService, private injector: Injector){
  }

  ngOnInit(): void {
      this.users = this.usersService.getUsers();
      effect(() => {
        console.log(`Age: ${this.age()}`);
        console.log(this.totalAge());
      }, {injector: this.injector})
  }

  public updateAge(){
    this.age.update(age => age+2);
  }

}
