import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of, startWith, switchMap } from 'rxjs';
import { Message } from '../shared/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  dataSource: Message[] = [
    { id: 1, title: 'Zaległości z opłatami.', sender: "Dziekanat uczelni", date: new Date(2022, 10, 19), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 2, title: 'Szkolenie Model (nie)biznesowy', sender: "Biuro Karier", date: new Date(2022, 10, 26), isMessageNew: false, content: "Biuro Karier WSEI zaprasza na szkolenie Model (nie)biznesowy. Czyli przepis na zarządzanie projektem społecznym w pigułce.\nSzkolenie przeznaczone jest dla wszystkich osób, które chcą rozpocząć swoja przygodę z działalnością społeczną, lub już działają, ale chcą zwiększyć efektywność swojej pracy w organizacji. Podczas niego uczestnicy prześledzą drogę od definiowania problemu społecznego do realizacji skutecznych działań. Nauczą się zarządzania projektem społecznym, definiowania mierników sukcesu, doboru odpowiednich zasobów i określania interesariuszy swoich działań. Bazą jest autorski materiał szkoleniowy wypracowany w ramach wieloletniej współpracy przy ewaluacji pracy organizacji pozarządowych oraz grup nieformalnych.\n \nTermin: 25 października 2022 r.\nGodzina: 18:00-20:00\nMiejsce: Sala coworking WSEI\nZapisy: https://forms.office.com/r/MNbPi6sVde\n\nDla uczestników przewidziany jest poczęstunek (pizza). Ilość miejsc ograniczona. Decyduje kolejność zgłoszeń." },
    { id: 3, title: 'Stypendia na semestr zimowy 2022/2023.', sender: "Dziekanat uczelni", date: new Date(2022, 10, 3), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 4, title: 'Pytania na obronę.', sender: "Dziekanat uczelni", date: new Date(2022, 12, 12), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 5, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 6, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 7, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 8, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 9, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 10, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 11, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 12, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { id: 13, title: 'Przedmioty do wyboru.', sender: "Dziekanat uczelni", date: new Date(2022, 9, 30), isMessageNew: true, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
  ]
  listData: Message[] | undefined;
  dataSize: number = this.dataSource.length;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  ngOnInit(): void {
    this.dataSource.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.linkListToPaginator();

  }

  linkListToPaginator() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        return of(this.dataSource);
      }))
      .subscribe(res => {
        const from = this.paginator.pageIndex * 10;
        const to = from + 10;
        this.listData = res.slice(from, to);
      });
  }

  readMessage(value: number){
    console.log(value);
    this.dataSource.find((item) => item.id === value)!.isMessageNew = false;
  }
}
