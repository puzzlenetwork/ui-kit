import { ColumnDef } from "@tanstack/react-table";

export interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  onClick?: (row: T) => void;
  fitContent?: boolean;
  onLoadMore?: () => void;
  withHover?: boolean;
  loading?: boolean;
}

export interface TableRow {
  disabled?: boolean;
  onClick?: () => void;
}
