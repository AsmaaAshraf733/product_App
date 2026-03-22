import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipePipe implements PipeTransform {

 transform(value: number, max: number = 5, round: boolean = false): string {
    if (!value) return '';
   // if round = true → round, else → floor
    const fullStars = round ? Math.round(value) : Math.floor(value);
    const emptyStars = max - fullStars;

// stars (without rounding decimals)
    let stars = 
      '<span style="color: gold;">' + '⭐'.repeat(fullStars) + '</span>' +
      '<span style="color: lightgray;">' + '☆'.repeat(emptyStars) + '</span>';

    // show exact rating number
    stars += ` <span style="color: #555;">(${value})</span>`;

    return stars;
  }

}
