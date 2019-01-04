import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { NotesService } from "../notes.service";
import { Note } from "../note.model";
import { mimeType } from "./mime-type.validator";

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: "app-note-create",
  templateUrl: "./note-create.component.html",
  styleUrls: ["./note-create.component.css"]
})
export class NoteCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  note: Note;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private noteId: string;

  
  constructor(
    public notesService: NotesService,
    public route: ActivatedRoute,
    public auth: AuthService//,
    //private router: Router
  ) {
/*      if(this.auth) {
        if(this.auth.isLoggedIn) {
          return;
        }
      }
 */      //this.router.navigateByUrl('/login-email');
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("noteId")) {
        this.mode = "edit";
        this.noteId = paramMap.get("noteId");
        this.isLoading = true;
        this.notesService.getNote(this.noteId).subscribe(noteData => {
          this.isLoading = false;
          this.note = {
            id: noteData._id,
            title: noteData.title,
            content: noteData.content,
            imagePath: noteData.imagePath
          };
          this.form.setValue({
            title: this.note.title,
            content: this.note.content,
            image: this.note.imagePath
          });
        });
      } else {
        this.mode = "create";
        this.noteId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSaveNote() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.notesService.addNote(
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    } else {
      this.notesService.updateNote(
        this.noteId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    }
    this.form.reset();
  }
}
