import { Component, OnInit } from "@angular/core";
import { DeclareFunctionStmt } from "@angular/compiler"
// import ICard from "./../interfaces/ICard";
import Deck from "../classes/Deck";
import ICard from "../interfaces/ICard";

@Component({
	selector: "gw-root",
  templateUrl: "./app.component.html"
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private _deck: Deck = new Deck;
  public drawnCard: ICard;
  public userHand: ICard[] = [];
  public _cardsLeft: number;
  public lifeBarColor: string;

  // constructor() {
  //     console.log(this._deck.drawCard());
  //  }

  public drawCard() {
    this.drawnCard = this._deck.drawCard();
    this.userHand.push(this.drawnCard);
    console.log(this.userHand);
    this.refreshCardCount();
  }
  public returnCard(card: ICard) {
    this.userHand.splice( this.userHand.indexOf(card), 1);
    this._deck.returnCardToDeck(card);
    this.refreshCardCount();
  }

  public refreshCardCount() {
    this._cardsLeft = this._deck.getRemainingCardCount();
    if (this._cardsLeft < 10) {
        this.lifeBarColor = 'red';
    }
    else if (this._cardsLeft < 20 ){
        this.lifeBarColor = 'yellow';
    }
    else{
      this.lifeBarColor = 'green';
    }
  }


	// write component code here; create just the properties and methods you need to get the job done
	// as described in "app.html"; start by importing ES modules you need such as "./../classes/Deck"
	//
	// raise your hand (or scream) for questions - this is challenging!
	//
	// remember to make everything which does not need to be bound in your HTML template or shared with
	// other code "private" to limit the chances of confusion and unwanted side-effects
	//
	// "private" makes helper methods and properties necessary for this component to work "limited" to
	// this component


	public ngOnInit(): void {
    this.refreshCardCount();

		// initialize properties here or inline with declarations - but be consistent!
	}
}
