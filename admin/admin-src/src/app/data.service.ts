import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { config } from './constants';
import { Observable, BehaviorSubject } from 'rxjs';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { Socket } from 'ngx-socket-io';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private proup = new BehaviorSubject({});
  data = this.proup.asObservable();

  private siteup = new BehaviorSubject({});
  sitesetting = this.siteup.asObservable();
  token = localStorage.getItem('Key');
  constructor(private http: HttpClient, private cookieService: CookieService, private socket: Socket) { }

  profilechange(pro) {
    this.proup.next(pro);
  }
  sitesettings(site) {
    this.siteup.next(site);
  }
  chklogin(params) {
    return this.http.post(config.http_url + 'admin/chklogin', params);
  }

  setSession(setData) {
    this.cookieService.set('OnePoolAdmin_ID', setData.session);
    this.cookieService.set('OnePoolAdmin_Role', setData.role);
  }

  getSession(type) {
    if (type == 'role') {
      var getData = this.cookieService.get('OnePoolAdmin_Role');
    } else {
      var getData = this.cookieService.get('OnePoolAdmin_ID');
    }
    return getData;
  }

  unsetSession() {
    this.cookieService.deleteAll();
    return 'aa';
  }

  loggedIn() {
    return !!localStorage.getItem('Key');
  }

  getData(url): Observable<any> {
    return this.http.get(config.http_url + url);
  }

  loadData(url, params): Observable<any> {
    return this.http.post(config.http_url + url, params);
  }

  importData(url, values): Observable<any> {
    values['authid'] = this.token;
    return this.http.post(config.http_url + url, values);
  }

  getRequest(uri, token) {
    const headers = new HttpHeaders()
      .set('cache-control', 'no-cache')
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    return this.http.get(config.http_url + uri, { headers: headers })
  }

  postRequest(uri, data, token) {
    const headers = new HttpHeaders()
      .set('cache-control', 'no-cache')
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
    return this.http.post(config.http_url + uri, data, { headers: headers })
  }

  filePostRequest(uri, data, token) {
    const headers = new HttpHeaders()
      .set('cache-control', 'no-cache')
      .set('Authorization', 'Bearer ' + token);
    return this.http.post(config.http_url + uri, data, { headers: headers })
  }

  sendip(ip) {
    this.socket.emit('check_block', ip);
  }

  adminUrl(){
    return '/UQZYyKXjbJhGPFSqSzkY/';
  }

  geteditorconfig() {
    var config: any;
    return config = {
      uiColor: '#ffffff',
      fillEmptyBlocks: false,
      tabSpaces: 0,
      toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
      { name: 'links' }, { name: 'insert' },
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
      { name: 'styles' },
      { name: 'colors' }],
      skin: 'kama',
      resize_enabled: false,
      addTargetToExternalLinks: true,
      removePlugins: 'elementspath,save,magicline',
      extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
      colorButton_foreStyle: {
        element: 'font',
        attributes: { 'color': '#(color)' }
      },
      height: 188,
      format_tags: 'p;h1;h2;h3;pre;div'
    }
  }

  idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;       
    window.ontouchstart = resetTimer; 
    window.onclick = resetTimer;      
    window.onkeypress = resetTimer;   
    window.addEventListener('scroll', resetTimer, true);

    function yourFunction() {
          localStorage.clear();
          window.location.href = '/#/UQZYyKXjbJhGPFSqSzkY';  
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 600000);
    }
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + moment().format('ll') + EXCEL_EXTENSION);
  }

}
