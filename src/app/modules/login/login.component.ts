import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { LoginService } from 'src/app/services/login/login.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RoleNames } from 'src/app/enuns/role_names';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: NotificationService,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
teste(){
    console.log();
    this.alertService.showError("Mensagem de erro", "Erro");
}
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            this.alertService.showError("Erro ao fazer login", "Erro");
            return;
        }else{
            //console.log(this.form.value);
            this.loginService.signin(this.form.value).subscribe((data) =>{
                console.log(data);
                if(data != null){
                localStorage.setItem("locpoint_token", data['accessToken']);
                const helper = new JwtHelperService();
                const decodedToken = helper.decodeToken(data['accessToken']);
                console.log(decodedToken['roles'][RoleNames.ROLE_ADMIN]);
                this.router.navigate(['/']);
                }
            },error=>{
                this.submitted = false;
                this.loading = false;
                this.alertService.showError("Erro ao fazer login", "Erro");
                console.log(error);
                });
            
        }

        this.loading = true;
    }
}
