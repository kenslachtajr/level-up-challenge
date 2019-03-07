import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug, DrugStoreService } from '@workspace/core-data';

@Component({
  selector: 'workspace-drug-store',
  templateUrl: './drug-store.component.html',
  styleUrls: ['./drug-store.component.scss']
})
export class DrugStoreComponent implements OnInit {
  drug: Drug;
  drugs$: Observable<Drug[]>;

  constructor(private drugStoreService: DrugStoreService) {}

  ngOnInit() {
    this.getDrugs();
  }

  selectDrug(drug: Drug) {
    this.drug = drug;
  }

  getDrugs() {
    this.drugs$ = this.drugStoreService.get();
  }

  saveDrug(drug: Drug) {
    drug.id ? this.updateDrug(drug) : this.createDrug(drug);
  }

  createDrug(drug: Drug) {
    this.drugStoreService.create(drug).subscribe(res => {
      this.reset();
      this.getDrugs()
    });
  }

updateDrug(drug: Drug) {
  this.drugStoreService.update(drug).subscribe(res => {
    this.reset();
    this.getDrugs();
  });
}

deleteDrug(drugId: number) {
  this.drugStoreService.delete(drugId).subscribe(res => {
    this.reset();
    this.getDrugs();
  })
}

  reset() {
    const emptyDrug: Drug = {
      id: null,
      product_name: '',
      supplier: '',
      quantity: null,
      unit_cost: ''
    };
    this.selectDrug(emptyDrug);
  }
}
