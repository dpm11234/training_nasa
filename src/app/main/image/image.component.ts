import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { ImageService } from '../../services/image.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {

  @Input() public date;

  public imagesSrc: [];
  public isPlay;
  public imgSrc;
  public showIndex;
  public length;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imagesSrc = [];
    this.showIndex = 0;
    this.isPlay = true;
    this.callApi();
  }

  ngOnChanges() {
    this.callApi();
  }

  callApi() {
    const { day, month, year } = this.date;
    this.imageService.getListImages('enhanced', this.date)
      .pipe(
        map(data => {
          return data.map(
            item => `${environment.api}/archive/enhanced/${year}/${month}/${day}/png/${item.image}.png`
          );
        })
      ).subscribe(images => {
        this.imagesSrc = images;
        this.length = images.length;
        this.playImages();
      });
  }

  changeStatusPlay() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.playImages();
    }
  }

  playImages() {
    const idInterval = setInterval(() => {
      if (!this.isPlay) {
        clearInterval(idInterval);
      }
      if (this.showIndex >= this.length - 1) {
        this.showIndex++;
        this.imgSrc = this.imagesSrc[this.showIndex];
        this.showIndex = 0;
        return;
      }

      this.imgSrc = this.imagesSrc[this.showIndex];
      this.showIndex++;
    }, 1000);

  }

}
