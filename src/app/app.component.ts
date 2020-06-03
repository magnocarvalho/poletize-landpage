import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ApiService } from "./api.service";
import { Cliente } from "./class/cliente";
import { LoadingBarService } from "@ngx-loading-bar/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "poletize";
  constructor(private api: ApiService, private loadingBar: LoadingBarService) {}
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
      let c: Cliente = {
        createat: new Date(),
        nome: this.profileForm.get("nome").value,
        telefone: this.profileForm.get("telefone").value,
        cargo: this.profileForm.get("cargo").value,
        email: this.profileForm.get("email").value,
      };

      this.api
        .createUsuario(c)
        .then((res) => {
          this.profileForm.disable();
        })
        .catch((err) => {})
        .finally(() => {
          this.loadingBar.complete();
        });
    }
  }
}
