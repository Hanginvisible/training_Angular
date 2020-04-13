import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  strSearch: string;
  users: User[] = [];
  selected: string[];

  constructor(private http: HttpClient, private toast: ToastrService, private router: Router) {
    this.selected = new Array<string>();
  }
  displayedColumn: string[] = ['select', 'id', 'UserName', 'FullName', 'Gender', 'Age', 'Email', 'Action']
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.strSearch = '';
    this.http.get('https://localhost:44396/api/user').subscribe(
      s => {
        this.dataSource.data = s as User[];
        console.log(this.dataSource.paginator = this.paginator, this.dataSource.sort = this.sort);
      }
    )
    
  }
  mapstr(val) {
    this.strSearch = val;
  }
  onSearch() {
    debugger
    this.http.get('https://localhost:44396/api/user?strsearch=' + this.strSearch).subscribe(
      s => {
        this.dataSource.data = s as User[];
        console.log(this.dataSource.paginator = this.paginator, this.dataSource.sort = this.sort);
      }
    )
  }
  clickCheck(event, id: string) {
    debugger
    if (event.target.checked) {
      this.selected.push(id);
      return;
    } else {
      this.selected = this.selected.filter(s => s !== id)
    }
  }
  onDelete() {
    debugger
    confirm('Are you sure to delete?')
    if (this.selected.length > 0) {
      const href = 'https://localhost:44396/api/user';
      this.selected.forEach(id => {
        const requestUrl = `${href}/${id}`;
        this.http.delete(requestUrl).subscribe(s => {
          console.log(s);
          this.toast.success('Delete success!')
          this.selected = new Array<string>();
          this.onSearch();
        })
      })
    }
  }

  Edit(id: string) {
    this.router.navigate(['/user', 'update', id]);
  }
}
