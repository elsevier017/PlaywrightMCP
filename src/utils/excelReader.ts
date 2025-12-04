import * as XLSX from 'xlsx';

export function readExcel(filePath: string, sheetName: string): any[] {
  const wb = XLSX.readFile(filePath);
  const ws = wb.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(ws);
}
