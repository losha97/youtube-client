import { Component, OnInit } from '@angular/core';
import { CardInter } from 'src/app/Cards';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CardService } from 'src/app/youtube/services/card.service';
import { SearchResultService } from 'src/app/core/services/search-result.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  cards: CardInter[] = [];

  card!: CardInter;

  constructor(private route: ActivatedRoute, private cardService: CardService, private location: Location, private searchResultService: SearchResultService) {
  }

  ngOnInit(): void {
    this.searchResultService.getCards().subscribe(cards => {
      this.cards = cards;
      this.getCard();
    });
  }

  getCard(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cardService.getCard(id, this.cards).subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

}
