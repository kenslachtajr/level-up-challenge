import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff, StaffService } from '@workspace/core-data';

@Component({
  selector: 'workspace-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staff: Staff;
  staff$: Observable<Staff[]>;

  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.getStaff();
  }

  selectStaff(staff: Staff) {
    this.staff = staff;
  }

  getStaff() {
    this.staff$ = this.staffService.get();
  }

  saveStaff(staff: Staff) {
    staff.id ? this.updateStaff(staff) : this.createStaff(staff);
  }

  createStaff(staff: Staff) {
    this.staffService.create(staff).subscribe(res => {
      this.reset();
      this.getStaff();
    });
  }

  updateStaff(staff: Staff) {
    this.staffService.update(staff).subscribe(res => {
      this.reset();
      this.getStaff();
    });
  }

  deleteStaff(staffId: number) {
    this.staffService.delete(staffId).subscribe(res => {
      this.reset();
      this.getStaff();
    });
  }

  reset() {
    const emptyStaff: Staff = {
      id: null,
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      ip_address: ''
    };
    this.selectStaff(emptyStaff);
  }
}
