import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class CoursesService {
    serviceUrl = '';

    constructor(private http:HttpClient) {

    }

    findCourseById(courseId: string): Observable<Course> {
        return this.http.get<Course>('/users/${courseId}');
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/users')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllCourseLessons(courseId:string): Observable<Lesson[]> {
        return this.http.get('/users', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map(res =>  res["payload"])
        );
    }

    findLessons(
        courseId:string, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get(this.serviceUrl+'users', {
            params: new HttpParams()
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["data"])
        );
    }

}