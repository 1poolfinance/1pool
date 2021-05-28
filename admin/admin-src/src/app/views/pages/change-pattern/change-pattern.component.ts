import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { NotifierService } from 'angular-notifier';
import { Socket } from 'ngx-socket-io';
import PatternLock from 'patternlock';
import * as $ from 'jquery';

@Component({
  selector: 'app-change-pattern',
  templateUrl: './change-pattern.component.html',
  styleUrls: ['./change-pattern.component.scss']
})
export class ChangePatternComponent implements OnInit {
  postRequest = '';
  private notifier: NotifierService;
  passSubmitted=false;
  old:any;new:any;confirm:any; token = localStorage.getItem('Key');

  constructor(private router: Router,private socket:Socket,
    notifier: NotifierService,private dataService: DataService) 
  {
  	this.notifier = notifier;
    this.dataService.getData('admin/getaccdetails').subscribe(resData => {
      var ip_status = resData.data;
      if(ip_status == "not_ok"){
        this.router.navigate(['/404']);
        return false;
      }
    });
  }

  ngOnInit() 
  {
    var lock = new PatternLock("#patterncode",{
      onDraw:function(pattern){
        var pat = lock.getPattern();
        $("#patterncode").val(pat);
        this.old=pat;      

      }
    });

    var lock1 = new PatternLock("#pattern",{
      onDraw:function(pattern){
        var pat = lock1.getPattern();
        $("#pattern").val(pat);
        this.new=pat;
      }
    });  		


    var lock2 = new PatternLock("#code",{
      onDraw:function(pattern){
        var pat = lock2.getPattern();
        $("#code").val(pat);
        this.confirm=pat;     
      }
    });
  }

  onSubmit2(data)
  {

    this.notifier.hideAll();
    this.old=$("#patterncode").val();
    if(!this.old)
    {
      this.notifier.notify( 'error', "Draw a old pattern");
      return false;
    }

    this.new=$("#pattern").val();
    if(!($("#pattern").val()))
    {
      this.notifier.notify( 'error', "Draw a new pattern");
      return false;
    }
    else if(this.new.length<3)
    {
      this.notifier.notify( 'error', "Pattern must be atleast 3 dots..!");
      return
    } 

    this.confirm=$("#code").val();
    if(!($("#code").val()))
    {
      this.notifier.notify( 'error', "Redraw a new pattern");
      return false;
    }
    else if(this.confirm.length<3)
    {
      this.notifier.notify( 'error', "Pattern must be atleast 3 dots..!");
      return 
    }

    if(this.new != this.confirm) {
      this.notifier.notify( 'error', 'Pattern don\'t match.');
      return;
    } if(this.old == this.new) {
      this.notifier.notify( 'error', 'Current pattern and new pattern cannot be same.'); 
      return;
    }

    var pass = { 
      authid      : this.token,
      curpattern  : this.old,
      newpattern  : this.new
    }
    this.postRequest = 'yes';
    this.dataService.importData('admin/updatePat', pass).subscribe(reqData => {
      this.postRequest = '';
      if(reqData.status == true) {
        this.notifier.notify( 'success', reqData.msg);
        this.passSubmitted = false;
        localStorage.clear();
        setTimeout(() => {
          return this.router.navigate(['/UQZYyKXjbJhGPFSqSzkY']);
        }, 500);
      } else {
        this.notifier.notify( 'error', reqData.msg);
      }
    });



  }

}
