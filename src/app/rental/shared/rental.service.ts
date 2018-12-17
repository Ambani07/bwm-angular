import { Injectable } from '@angular/core'
import { Observable, observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService{

    private rentals: Rental[] = [{
        id: "1",
        title: "central apartment",
        city: "new york",
        street: "Main strees",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "17/12/2018"
      },
      {
        id: "2",
        title: "central apartment 2",
        city: "johannesburt",
        street: "jan smarts",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "18/12/2018"
      },
      {
        id: "3",
        title: "central apartment 3",
        city: "fourways",
        street: "william nichole",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "16/12/2018"
      },
      {
        id: "4",
        title: "central apartment 4",
        city: "new york",
        category: "condo",
        street: "malibongwe",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "15/12/2018"
      }
    ];

    public getRentalById(rentalId: string): Observable<Rental>{
      
      return new Observable<Rental>((observer) => {

        setTimeout(() =>{
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId;
          });

          observer.next(foundRental);
        }, 500);
      });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {
          setTimeout(() =>{
            observer.next(this.rentals);
          }, 1000);

          
        });

    }
}