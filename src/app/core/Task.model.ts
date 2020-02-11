export class Task {
  static index = 0;
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  isCompleted: boolean;

  constructor(title: string, description: string) {
    this.id = ++Task.index;
    this.title = title;
    this.description = description;
    this.createdOn = new Date(Date.now());
    this.isCompleted = false;
  }
}
