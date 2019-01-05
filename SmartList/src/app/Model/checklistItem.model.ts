export interface ChecklistItem {
  id: string;//PK
  title: string;
  description: string;
  imagePath: string;
  group: string;
  checklist: string;//FK
}
