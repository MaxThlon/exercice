import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../user/services/userService';

@Component({
    selector: 'ex-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent {
    title = 'Welkome';
    validateForm!: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UserService) {}

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    submitForm(): void {
        let validate = false;
        for (const i in this.validateForm.controls) {
            if (this.validateForm.controls.hasOwnProperty(i)) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
                validate = true;
            }
        }


        if (this.validateForm.valid) {
            this.userService.login(this.fb.control['userName'], this.fb.control['password']);

        }
    }
}
