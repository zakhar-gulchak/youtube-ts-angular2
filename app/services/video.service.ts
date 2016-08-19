import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVideo } from '../components/private/videoItem/video';

@Injectable()
export class VideoService {
    private _videoUrl = 'api/videos/videos.json';

    constructor(private _http: Http) { }

    getVideos(): Observable<IVideo[]> {
        return this._http.get(this._videoUrl)
            .map((response: Response) => <IVideo[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVideo(id: number): Observable<IVideo> {
        return this.getVideos()
            .map((videos: IVideo[]) => videos.find(p => p.videoId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
