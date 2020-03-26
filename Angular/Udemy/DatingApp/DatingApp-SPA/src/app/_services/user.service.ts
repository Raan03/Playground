import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../_models/user";
import { PaginatedResult } from "../_models/pagination";
import { map } from "rxjs/operators";
import { IUserParams } from "../_models/userParams";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(
    page?: number,
    itemsPerPage?: number,
    userParams?: IUserParams
  ): Observable<PaginatedResult<User[]>> {
    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<
      User[]
    >();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append("pageNumber", page.toString());
      params = params.append("pageSize", itemsPerPage.toString());
    }

    if (userParams != null) {
      params = params.append("minAge", userParams.minAge.toString());
      params = params.append("maxAge", userParams.maxAge.toString());

      params = params.append("gender", userParams.gender);
    }

    return this.http
      .get<User[]>(this.baseUrl + "users", {
        observe: "response",
        params
      })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;

          if (response.headers.get("Pagination") != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get("Pagination")
            );
          }

          return paginatedResult;
        })
      );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + "users/" + id);
  }
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + "users/" + id, user);
  }
  setMainPhoto(userid: number, id: number) {
    return this.http.post(
      this.baseUrl + "users/" + userid + "/photos/" + id + "/setMain",
      {}
    );
  }
  deletePhoto(userid: number, id: number) {
    return this.http.delete(this.baseUrl + "users/" + userid + "/photos/" + id);
  }
}
