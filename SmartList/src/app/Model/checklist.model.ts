export interface Checklist {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  group: string;//FK
  checklistItems: [string];//Items ID Ref Collection
}
