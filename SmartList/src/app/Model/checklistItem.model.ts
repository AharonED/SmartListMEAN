export interface ChecklistItem {
  id: string;//PK
  title: string;
  description: string;
  imagePath: string;
  checklistId: string;//FK
  isDone: boolean;
}
