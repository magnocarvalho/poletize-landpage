import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { Cliente } from "./class/cliente";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private firestore: AngularFirestore,
    private loadingBar: LoadingBarService
  ) {}

  createUsuario(policy: Cliente) {
    this.loadingBar.start();
    return this.firestore.collection("usuarios").add(policy);
  }
}
