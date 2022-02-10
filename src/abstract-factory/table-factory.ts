import SmallTable from "./small-table";
import MediumTable from "./medium-table";
import BigTable from "./big-table";
import { ITable } from "./table";

export default class TableFactory {
  static getTable(table: string): ITable {
    switch (table) {
      case "BigTable":
        return new BigTable();
      case "MediumTable":
        return new MediumTable();
      case "BigTable":
        return new SmallTable();
      default:
        throw new Error("No Table Found");
    }
  }
}
