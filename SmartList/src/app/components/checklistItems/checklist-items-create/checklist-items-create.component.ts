import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { ChecklistItemsService } from "../../../services/checklistItems.service";
import { ChecklistItem } from "../../../Model/checklistItem.model";
import { mimeType } from "../../../notes/note-create/mime-type.validator";

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { group } from "@angular/animations";

@Component({
  selector: 'app-checklistItem-create',
  templateUrl: './checklist-Items-create.component.html',
  styleUrls: ['./checklist-Items-create.component.css']
})
export class ChecklistItemsCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  checklistItems: ChecklistItem;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private checklistItemsId: string;
  private checklistId: string;

  
  constructor(
    public checklistItemsService: ChecklistItemsService,
    public route: ActivatedRoute,
    public auth: AuthService//,
  ) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      checklistId: new FormControl(null,null),
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
      if (paramMap.has("checklistId"))
      {
        this.checklistId = paramMap.get("checklistId");
        this.form.value.checklistId = this.checklistId;
      }
      else
      {
        this.checklistId="-1";
      }

      console.log("this.checklistId" + this.checklistId);

      if (paramMap.has("checklistItemsId")) {
        this.mode = "edit";
        this.checklistItemsId = paramMap.get("checklistItemsId");
        this.isLoading = true;
        this.checklistItemsService.getChecklistItem(this.checklistItemsId).subscribe(checklistItemsData => {
          this.isLoading = false;
          console.log("checklistItemsData.checklistId" + checklistItemsData.checklistId)
          this.checklistItems = {
            id: checklistItemsData._id,
            title: checklistItemsData.title,
            description: checklistItemsData.description,
            imagePath: checklistItemsData.imagePath,
            checklistId: checklistItemsData.checklistId
          };
          
          if(this.checklistId=="-1")
            this.checklistId = checklistItemsData.checklistId;

          this.form.setValue({
            //id: this.checklistItems.id,
            title: this.checklistItems.title,
            description: this.checklistItems.description,
            image: this.checklistItems.imagePath,
            checklistId: this.checklistItems.checklistId//,
            //checklistItemsItems: null
          });
        });
      } else {
        this.mode = "create";
        this.checklistItemsId = null;
        //this.form.value.checklistId   = this.checklistId;
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

  onSaveChecklistItems() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      if(this.form.value.checklistId==null )
        this.form.value.checklistId =this.checklistId;

      console.log("this.form.value.checklistId " + this.form.value.checklistId );
      this.checklistItemsService.addChecklistItems(
        this.form.value.title,
        this.form.value.description,
        this.form.value.image,
        this.form.value.checklistId        
      );
    } else {
      this.checklistItemsService.updateChecklistItems(
        this.checklistItemsId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.image,
        this.form.value.checklistId ,
        null       
      );
    }
    this.form.reset();
  }
}
