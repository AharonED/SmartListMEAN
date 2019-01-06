import { Component, OnInit,Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { GroupsService } from "../../../services/groups.service";
import { Group } from "../../../Model/group.model";
import { mimeType } from "../../../notes/note-create/mime-type.validator";

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
  selector: "app-group-create",
  templateUrl: "./group-create.component.html",
  styleUrls: ["./group-create.component.css"]
})
export class GroupCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  group: Group;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  @Output() groupId: string;

  
  constructor(
    public groupsService: GroupsService,
    public route: ActivatedRoute,
    public auth: AuthService//,
    //private router: Router
  ) {
/*      if(this.auth) {
        if(this.auth.isLoggedIn) {
          return;
        }
      }
      //this.router.navigateByUrl('/login-email'); 
 */  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("groupId")) {
        this.mode = "edit";
        this.groupId = paramMap.get("groupId");
        this.isLoading = true;
        this.groupsService.getGroup(this.groupId).subscribe(groupData => {
          this.isLoading = false;
          this.group = {
            id: groupData._id,
            title: groupData.title,
            description: groupData.description,
            imagePath: groupData.imagePath
          };
          this.form.setValue({
            title: this.group.title,
            description: this.group.description,
            image: this.group.imagePath
          });
        });
      } else {
        this.mode = "create";
        this.groupId = null;
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

  onSaveGroup() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.groupsService.addGroup(
        this.form.value.title,
        this.form.value.description,
        this.form.value.image
      );
    } else {
      this.groupsService.updateGroup(
        this.groupId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.image
      );
    }
    this.form.reset();
  }
}
