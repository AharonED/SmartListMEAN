import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Note } from "./note.model";

@Injectable({ providedIn: "root" })
export class NotesService {
  private notes: Note[] = [];
  private notesUpdated = new Subject<{ notes: Note[]; noteCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getNotes(notesPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${notesPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; notes: any; maxNotes: number }>(
        "http://localhost:3000/api/notes" + queryParams
      )
      .pipe(
        map(noteData => {
          return {
            notes: noteData.notes.map(note => {
              return {
                title: note.title,
                content: note.content,
                id: note._id,
                imagePath: note.imagePath
              };
            }),
            maxNotes: noteData.maxNotes
          };
        })
      )
      .subscribe(transformedNoteData => {
        this.notes = transformedNoteData.notes;
        this.notesUpdated.next({
          notes: [...this.notes],
          noteCount: transformedNoteData.maxNotes
        });
      });
  }

  getNoteUpdateListener() {
    return this.notesUpdated.asObservable();
  }

  getNote(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      imagePath: string;
    }>("http://localhost:3000/api/notes/" + id);
  }

  addNote(title: string, content: string, image: File) {
    const noteData = new FormData();
    noteData.append("title", title);
    noteData.append("content", content);
    noteData.append("image", image, title);
    this.http
      .post<{ message: string; note: Note }>(
        "http://localhost:3000/api/notes",
        noteData
      )
      .subscribe(responseData => {
        this.router.navigate(["/note-list"]);
      });
  }

  updateNote(id: string, title: string, content: string, image: File | string) {
    let noteData: Note | FormData;
    if (typeof image === "object") {
      noteData = new FormData();
      noteData.append("id", id);
      noteData.append("title", title);
      noteData.append("content", content);
      noteData.append("image", image, title);
    } else {
      noteData = {
        id: id,
        title: title,
        content: content,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/notes/" + id, noteData)
      .subscribe(response => {
        this.router.navigate(["/note-list"]);
      });
  }

  deleteNote(noteId: string) {
    return this.http
      .delete("http://localhost:3000/api/notes/" + noteId);
  }
}