import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];

  filteredData: any[] = [];
  paginatedData: any[] = [];

  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  filterText = new FormControl('');

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {

    this.filteredData = this.data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(this.filterText.value.toLowerCase())
      )
    );

    if (this.sortColumn) {
      this.filteredData.sort((a, b) => {
        const aVal = a[this.sortColumn!];
        const bVal = b[this.sortColumn!];

        if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedData = this.filteredData.slice(start, start + this.pageSize);
  }

  changeSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  changePage(delta: number): void {
    this.currentPage += delta;
    this.applyFilters();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

}
