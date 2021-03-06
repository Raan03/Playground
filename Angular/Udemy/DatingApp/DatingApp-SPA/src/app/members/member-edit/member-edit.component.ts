import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { User } from "src/app/_models/user";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "src/app/_services/alertify.service";
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/_services/user.service";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"]
})
export class MemberEditComponent implements OnInit {
  user: User;
  photoUrl: string;
  @ViewChild("editForm") editForm: NgForm;
  @HostListener("window:beforeunload", ["$event"]) unloadNotification(
    $event: any
  ) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => {
      this.photoUrl = photoUrl;
    });
  }
  updateUser() {
    const id = this.authService.decodedToken.nameid;

    this.userService.updateUser(id, this.user).subscribe(
      data => {
        this.alertifyService.succes(
          this.user.knownAs + " has been updated succesfully"
        );
        this.editForm.reset(this.user);
      },
      error => {
        this.alertifyService.warning(
          this.user.knownAs + " encountered an issue while updating."
        );
        this.alertifyService.error(error);
      }
    );
  }
  updateMainPhoto(photoUrl: string) {
    this.user.photoUrl = photoUrl;
  }
}
