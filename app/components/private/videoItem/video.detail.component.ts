import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IVideo} from './video';
import {VideoService} from '../../../services/video.service';


@Component({
    templateUrl: 'app/components/private/videoItem/video.detail.component.html'
})
export class VideoDetailComponent {
    pageTitle: string = 'Product Detail';
    video: IVideo;
    errorMessage: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private _videoService: VideoService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getVideo(id);
            });
    }

    getVideo(id: number) {
        this._videoService.getVideo(id).subscribe(
            video => this.video = video,
            error => this.errorMessage = <any>error);
    }
}
