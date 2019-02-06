import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { ChecklistItemsService } from "../../../services/checklistItems.service";
import { ChecklistItem } from "../../../Model/checklistItem.model";
import { mimeType } from "../../../validators/mime-type.validator";

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
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
  private checklistItemId: string;
  private checklistId: string;
  private isDone: boolean;

  
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
        //validators: [Validators.required],
        //asyncValidators: [mimeType]
      }),
      isDone: new FormControl(null,null)
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

      if (paramMap.has("checklistItemId")) {
        this.mode = "edit";
        this.checklistItemId = paramMap.get("checklistItemId");
        this.isLoading = true;
        this.checklistItemsService.getChecklistItem(this.checklistItemId).subscribe(checklistItemsData => {
          this.isLoading = false;
          console.log("checklistItemsData.checklistId" + checklistItemsData.checklistId);
          console.log("checklistItemsData.isDone" + checklistItemsData.isDone);
          console.log(checklistItemsData)
          console.log("checklistItemsData.description" + checklistItemsData.description);

          this.checklistItems = {
            id: checklistItemsData._id,
            title: checklistItemsData.title,
            description: (checklistItemsData.description+""=="undefined"?"":checklistItemsData.description+""),
            imagePath: "",//checklistItemsData.imagePath,
            checklistId: checklistItemsData.checklistId,
            isDone: (checklistItemsData.isDone==true)
          };
          
          this.isDone=checklistItemsData.isDone;
          
          if(this.checklistId=="-1")
            this.checklistId = checklistItemsData.checklistId;

          this.form.setValue({
            //id: this.checklistItems.id,
            title: this.checklistItems.title,
            description: this.checklistItems.description,
            image: this.checklistItems.imagePath,
            checklistId: this.checklistItems.checklistId,
            isDone: this.checklistItems.isDone
          });
        });
      } else {
        this.mode = "create";
        this.checklistItemId = null;
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
      console.log("this.form.value.isDone     " + this.form.value.isDone     );
      this.checklistItemsService.addChecklistItems(
        this.form.value.title,
        this.form.value.description,
        null,//this.form.value.image,
        this.form.value.checklistId,
        this.form.value.isDone  
      );
    } else {
      console.log("this.form.value.checklistId " + this.form.value.checklistId );
      console.log("this.form.value.isDone     " + this.form.value.isDone     );
      console.log("this.form.value.title     " + this.form.value.title     );
      console.log("this.form.value.description     " + this.form.value.description     );
      
      this.checklistItemsService.updateChecklistItems(
        this.checklistItemId,
        this.form.value.title,
        this.form.value.description,
        "",//this.form.value.image,
        this.form.value.checklistId ,
        this.form.value.isDone       
      );
    }
    this.form.reset();
  }

  OnIndeterminateChange($event){
    console.log($event); 
    this.isDone=$event;//true or false
 }
 
}
