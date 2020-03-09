import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  private preprositions : string[] = ['da', 'de', 'do', 'das', 'dos'];
  private surnames: string[] = ['filho', 'filha', 'neto', 'neta', 'sobrinho', 'sobrinha', 'junior'];

  transform(value: string): string {
    return this.formatAuthor(value);
  }

  private formatAuthor(name: string): string {
    let nameParts = name.split(' ');
    let surnames: string = '';
    let authorName: string = '';

    nameParts.map( (value, index, arr) => {
      if (arr.length === 1) {
        authorName = value.toUpperCase();
        return;
      }

      if (( ( this.surnames.includes(value.toLowerCase()) && index === (arr.length - 1)) || index === (arr.length - 1)) || (this.surnames.includes(arr[index + 1].toLowerCase()) && !this.preprositions.includes(value.toLowerCase()) && arr.length >= 3 )) {
        surnames = surnames + ' ' + value.toUpperCase();
        return;
      }

      authorName = authorName + ' ' + value;
      return;
    });

    const comma = (surnames) ? ', ': '' ;

    return surnames + comma + authorName;

  }

}