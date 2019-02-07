import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { ChecklistsService } from "../../../services/checklists.service";
import { Checklist } from "../../../Model/checklist.model";
import { mimeType } from "../../../validators/mime-type.validator";

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { group } from "@angular/animations";

@Component({
  selector: 'app-checklist-create',
  templateUrl: './checklist-create.component.html',
  styleUrls: ['./checklist-create.component.css']
})
export class ChecklistCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  checklist: Checklist;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private checklistId: string;
  private groupId = "-1";

  
  constructor(
    public checklistsService: ChecklistsService,
    public route: ActivatedRoute,
    public auth: AuthService//,
  ) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      group: new FormControl(null,null),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        //validators: [Validators.required],
        //asyncValidators: [mimeType]
      })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {

      //In New mode
      if (paramMap.has("groupId"))
      {
        this.groupId = paramMap.get("groupId");
        this.form.value.group = this.groupId;
      }
      else
      {
        this.groupId="-1";
      }

      console.log("--this.groupId" + this.groupId);
//In Edit mode
      if (paramMap.has("checklistId")) {
        this.mode = "edit";
        this.checklistId = paramMap.get("checklistId");
        this.isLoading = true;
        this.checklistsService.getChecklist(this.checklistId).subscribe(checklistData => {
          this.isLoading = false;
          console.log("checklistData.group" + checklistData.group)
          this.checklist = {
            id: checklistData._id,
            title: checklistData.title,
            description: checklistData.description,
            imagePath: checklistData.imagePath,
            group: checklistData.group,
            checklistItems: null
          };
          
          if(this.groupId=="-1")
            this.groupId = checklistData.group;

            console.log("this.groupId" + this.groupId);
                        
          this.form.setValue({
            //id: this.checklist.id,
            title: this.checklist.title,
            description: this.checklist.description,
            image: "",//this.checklist.imagePath,
            group: this.checklist.group//,
            //checklistItems: null
          });
        });
      } else {
        this.mode = "create";
        this.checklistId = null;
        //this.form.value.group   = this.groupId;
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

  onSaveChecklist() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      if(this.form.value.group==null )
        this.form.value.group =this.groupId;

      console.log("this.form.value.group " + this.form.value.group );
      this.checklistsService.addChecklist(
        this.form.value.title,
        this.form.value.description,
        null,//this.form.value.image,
        this.form.value.group        
      );
    } else {
      if(this.form.value.group==null )
      this.form.value.group =this.groupId;

    console.log("this.form.value.group " + this.form.value.group );

      this.checklistsService.updateChecklist(
        this.checklistId,
        this.form.value.title,
        this.form.value.description,
        null,//this.form.value.image,
        this.form.value.group ,
        null       
      );
    }
    this.form.reset();
  }
}
