import { Directive, ElementRef, Input, Renderer2, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  private _text: string;

  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    public viewRef: ViewContainerRef,
    public templateRef: TemplateRef<any>
  ) { }

  @Input() set appHighlight(value: string) {
    this._text = value;
  };

  @Input() set appHighlightFilter(value: string) {
    this._clearContainer();
    if (value) {
      debugger
      const firstIndex = this._text.toLowerCase().indexOf(value.toLowerCase());
     // const secondIndex = firstIndex + value.length;

      const searchWordone = [this._text.slice(0,firstIndex), `<span style="background-color: yellow">`, this._text.slice(firstIndex)].join('');
      const firstIndexTwo = searchWordone.toLowerCase().indexOf(value.toLowerCase());
      const secondIndex = firstIndexTwo + value.length;
      const searchWord =  [searchWordone.slice(0, secondIndex), `</span>`, searchWordone.slice(secondIndex)].join('');
     
    //  const searchWord = this._text.replace(value, `<span style="background-color: yellow">${value}</span>`);
      const seacrhWordAll = this.renderer.createElement('div') as HTMLDivElement;
      seacrhWordAll.innerHTML = searchWord;
      this.renderer.appendChild(this.el.nativeElement.parentElement, seacrhWordAll);
    } else {
      const seacrhWordAll = this.renderer.createElement('div') as HTMLDivElement;
      seacrhWordAll.innerHTML = this._text;
      this.renderer.appendChild(this.el.nativeElement.parentElement, seacrhWordAll);
    }
  };

  private _clearContainer(): void {
    const children = Array.prototype.slice.call((this.el.nativeElement as HTMLElement).parentElement.children);
    for (const child of children) {
      this.renderer.removeChild(this.el.nativeElement.parentElement, child);
    }
  }
}
