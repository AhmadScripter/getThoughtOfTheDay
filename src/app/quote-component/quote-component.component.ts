import { Component, OnInit } from '@angular/core';
import { Quote } from '../Model/quote.model';
import { QuoteServiceService } from '../services/quote-service.service';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrl: './quote-component.component.css'
})
export class QuoteComponentComponent implements OnInit{
  thought: Quote | undefined;
  isLoaded = true;

  constructor(private quoteService: QuoteServiceService){}
  ngOnInit(): void {
   this.fetchData()
  }

  fetchData() {
    this.isLoaded = true;
    this.quoteService.getThoughtOfTheDay().subscribe({
      next: (data) => {
        this.thought = data;
        this.isLoaded = false;
      },
      error: (err) => {
        console.error('Error fetching quote:', err);
        this.isLoaded = false;
      }
    });
  }
  
}
