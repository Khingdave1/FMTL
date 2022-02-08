import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  submitMessage: string = "";
  showMessage: boolean = false;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) {
    // Form
    this.form = this.formBuilder.group({
      name: [''],
      message: [''],
      email: [''],
      subject: ['']
    })
  }

  ngOnInit(): void {
  }


  // Post Data
  addItem() {
    // Start loading
    this.loading = true

    let payload = {
      name: this.form.get('name')!.value,
      message: this.form.get('message')!.value,
      email: this.form.get('email')!.value,
      subject: this.form.get('subject')!.value,
      phone: '09036577028'
    }

    this.contactService.postData(payload).subscribe((res: any) => {

      // Set loading to false
      this.loading = false

      // Show alert message
      this.submitMessage = res.message
      // Add Success color to the submit Message
      document.getElementById('submit-message')?.classList.add('green-color')
      // Display error
      this.showMessage = true

      // Set Timeout
      setTimeout(() => {
        this.showMessage = false;
      }, 5000);

    }, ((error: any) => {
      console.log(error)
      //  Show error message
      this.submitMessage = error.error.message
      // Add danger color to the submit Message
      document.getElementById('submit-message')?.classList.add('red-color')
      // Display error
      this.showMessage = true

      // Set loading to false
      this.loading = false
    }))
  }
}
