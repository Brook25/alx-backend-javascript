import { RowElement, RowID } from '/.interface'

type insertrow = (row: RowElement) => number;
type deleterow = (rowId: number) => void;
type updaterow = (rowId: number, row: RowElement) => number;
