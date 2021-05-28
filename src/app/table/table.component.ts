import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MockData } from '../models/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent   extends MatPaginatorIntl {

 
  title = 'Test';
  itemsPerPageLabel = 'Rows per page';//customize item per page label

  constructor() {
    super();
  }



  mydata:MockData[] = [
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    {Id:1,modifiedDate:"7 April,2020 4:00 AM" ,recordtype:'Individual',fullname:'John Peter MC',status:"Pending",regime:"Al-Quida"},
    
   
  ];
displayedColumns: string[] = ['select', 'ID','recordtype', 'fullname', 'status', 'regime','modifiedDate'];
dataSource = new MatTableDataSource<MockData>(this.mydata);
selection = new SelectionModel<MockData>(true, []);
@ViewChild(MatSort) sort: MatSort;

@ViewChild(MatPaginator) paginator: MatPaginator;
 length=this.dataSource.data.length;

 cellClicked(element){
   
 }

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }

  this.selection.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: MockData): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
}
}

