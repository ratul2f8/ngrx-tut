import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface IProduct {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];

    description: string;

    imageLinks: {
      thumnbail: string;
      smallThumnail: string;
    };
  };
}
