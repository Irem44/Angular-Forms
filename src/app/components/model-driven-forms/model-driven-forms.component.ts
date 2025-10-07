import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './model-driven-forms.component.html',
  styleUrl: './model-driven-forms.component.scss'
})
export class ModelDrivenFormsComponent {
 frm:FormGroup;
 
 constructor(private formbuilder:FormBuilder){
  this.frm=formbuilder.group({
    name:['',Validators.required],
    surname:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    comment:['',Validators.required]

  })

  
 }

 onSubmit(data){
   console.log(data);
   
 }


}
