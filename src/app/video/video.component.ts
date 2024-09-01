import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { vidservice } from '../vidaud.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//import { RouterModule } from '@angular/router'; // Import RouterModule

declare var jwplayer: any;

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnInit {
  
  getSanitizedUrlName(urlName: string): string {
    return urlName.startsWith('/') ? urlName.substring(1) : urlName;
  }

  videoAudio: any[] = [];
  initialized: boolean = false;

  constructor(private vidservice: vidservice,private router: Router) { }
 
  ngOnInit(): void {
    this.vidservice.getVids().subscribe(data => {
      this.videoAudio = data.videoAudio;
      console.log("this is the ", this.videoAudio); 
    });

  }
  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked triggered'); // Debugging log
    if (this.videoAudio.length > 0 && !this.initialized) {
      console.log('Initializing JW Players'); // Debugging log
      this.initializeJWPlayers();
      this.initialized = true;
    }
  }
  initializeJWPlayers(): void {
    this.videoAudio.forEach((item, index) => {
      console.log(`Initializing player-${index} with URL: ${item.url}`);
      jwplayer(`player-${index}`).setup({
        file: item.url,
        width: '100%',
        image: item.thumbnail,
        aspectratio: '16:9',
        FriendlyUrlName: item.FriendlyUrlName
      });
    });
  }
  navigateToDetails(friendlyUrlName: string): void {
    const sanitizedUrl = this.getSanitizedUrlName(friendlyUrlName);
    this.router.navigateByUrl(`/details/video/${sanitizedUrl}`).then(() => {
      window.location.reload(); // Forces a page reload
    });
  }
  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }
  // onNavigate(event: Event, type: string, FriendlyUrlName: string) {
  //   //event.preventDefault(); // Prevent the default link behavior
  //   this.navigateTo(`/details/${type}/${FriendlyUrlName}`);
  // }
}
// export class VideoComponent implements OnInit, OnDestroy, AfterViewInit {

//   videoAudio: any[] = [];
//   initialized: boolean = false;

//   constructor(private vidservice: vidservice, private router: Router) { 
//     console.log('VideoComponent instantiated');
//   }

//   ngOnInit(): void {
//     this.vidservice.getVids().subscribe(data => {
//       this.videoAudio = data.videoAudio;
//       console.log("Video data:", this.videoAudio);
//     });
//   }

//   ngAfterViewInit(): void {
//     if (!this.initialized && this.videoAudio.length > 0) {
//       this.initializeJWPlayers();
//       this.initialized = true;
//     }
//   }

//   ngOnDestroy(): void {
//     try {
//       this.videoAudio.forEach((item, index) => {
//         const playerId = `player-${index}`;
//         const playerInstance = jwplayer(playerId);
//         if (playerInstance) {
//           playerInstance.remove();
//         }
//       });
//     } catch (error) {
//       console.error('Error during JWPlayer cleanup:', error);
//     }
//   }

//   getSanitizedUrlName(friendlyUrlName: string): string {
//     const sanitizedUrl = encodeURIComponent(friendlyUrlName.trim());
//     console.log('Encoded URL:', sanitizedUrl);
//     return sanitizedUrl;
//   }

//   initializeJWPlayers(): void {
//     if (this.initialized) return;

//     setTimeout(() => {
//       console.log('Initializing JW Players');
//       this.videoAudio.forEach((item, index) => {
//         jwplayer(`player-${index}`).setup({
//           file: item.url,
//           width: '100%',
//           image: item.thumbnail,
//           aspectratio: '16:9',
//           FriendlyUrlName: item.FriendlyUrlName
//         });
//       });
//       this.initialized = true;
//     }, 100); // Debounce to prevent multiple initializations
//   }
// }
