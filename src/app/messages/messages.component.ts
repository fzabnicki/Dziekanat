import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of, startWith, Subscription, switchMap } from 'rxjs';
import { Message } from '../shared/message';
import { MessageServiceService } from './shared/message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  dataSource: Message[] = [];
  subscriptions: Subscription[] = [];
  listData: Message[] | undefined;
  dataSize: number = 0;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private messageService: MessageServiceService) {

  }
  ngOnInit(): void {
    this.getMessages();
    this.sortMessagesByDate();
  }
  
  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  
  getMessages(){
    const sub = this.messageService.getMessages().subscribe((messageList)=>{
      this.dataSource = messageList;
      this.dataSize = this.dataSource.length;
      this.linkListToPaginator();
    })
    this.subscriptions.push(sub);
  }
  
  sortMessagesByDate(){
    this.dataSource.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  linkListToPaginator() {
    const sub = merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.dataSource);
      }))
      .subscribe(res => {
        const from = this.paginator.pageIndex * 10;
        const to = from + 10;
        this.listData = res.slice(from, to);
      });
      this.subscriptions.push(sub);
  }

  readMessage(value: Message){
    let item = this.dataSource.find((item) => item.id === value.id);
    if(item?.isMessageNew == true){
      const sub = this.messageService.readMessage(value.id).subscribe(()=>{
        this.dataSource.find((item) => item.id === value.id)!.isMessageNew = false;
      })
      this.subscriptions.push(sub);
    }
  }
}
