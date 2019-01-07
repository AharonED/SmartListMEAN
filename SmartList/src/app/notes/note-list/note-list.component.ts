import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { Note } from "../note.model";
import { NotesService } from "../notes.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent implements OnInit, OnDestroy {

  notes: Note[] = [];
  isLoading = false;
  totalNotes = 0;
  notesPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private notesSub: Subscription;

  constructor(public notesService: NotesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.notesService.getNotes(this.notesPerPage, this.currentPage);
    this.notesSub = this.notesService
      .getNoteUpdateListener()
      .subscribe((noteData: {notes: Note[], noteCount: number}) => {
        this.isLoading = false;
        this.totalNotes = noteData.noteCount;
        this.notes = noteData.notes;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.notesPerPage = pageData.pageSize;
    this.notesService.getNotes(this.notesPerPage, this.currentPage);
  }

  onDelete(noteId: string) {
    this.isLoading = true;
    this.notesService.deleteNote(noteId).subscribe(() => {
      this.notesService.getNotes(this.notesPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.notesSub.unsubscribe();
  }
}
