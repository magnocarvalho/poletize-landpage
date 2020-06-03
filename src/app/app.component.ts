import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ApiService } from "./api.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "poletize";
  constructor(private api: ApiService) {}
  profileForm = new FormGroup({
    nome: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.email,
    ]),
    telefone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    cargo: new FormControl("", [Validators.required]),
  });

  salvarDados(e) {
    // e.preventDefault();
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.api.createUsuario(this.profileForm.value);
    }
  }
}
