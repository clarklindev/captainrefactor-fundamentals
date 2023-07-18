// Target interface expected by the client
interface MediaPlayer {
  play(audioType: string, fileName: string): void;
}

// Adaptee interface that needs to be adapted
interface AdvancedMediaPlayer {
  playVlc(fileName: string): void;
  playMp4(fileName: string): void;
}

// Concrete implementation of the Adaptee interface
class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {
    console.log("Playing VLC file: " + fileName);
  }
  playMp4(fileName: string): void {}// Do nothing
}

// Concrete implementation of the Adaptee interface
class Mp4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string): void {}// Do nothing
  playMp4(fileName: string): void {
    console.log("Playing MP4 file: " + fileName);
  }
}

// Adapter class that implements the Target interface and wraps the Adaptee
class MediaAdapter implements MediaPlayer {
  private advancedMediaPlayer: AdvancedMediaPlayer;

  constructor(audioType: string) {
    if (audioType === "vlc") {
      this.advancedMediaPlayer = new VlcPlayer();
    } else if (audioType === "mp4") {
      this.advancedMediaPlayer = new Mp4Player();
    } else {
      throw new Error("Invalid audio type.");
    }
  }

  play(audioType: string, fileName: string): void {
    if (audioType === "vlc") {
      this.advancedMediaPlayer.playVlc(fileName);
    } else if (audioType === "mp4") {
      this.advancedMediaPlayer.playMp4(fileName);
    }
  }
}

// Client code that uses the MediaPlayer interface
class AudioPlayer implements MediaPlayer {
  play(audioType: string, fileName: string): void {
    if (audioType === "mp3") {
      console.log("Playing MP3 file: " + fileName);
    } else if (audioType === "vlc" || audioType === "mp4") {
      const mediaAdapter = new MediaAdapter(audioType);
      mediaAdapter.play(audioType, fileName);
    } else {
      console.log("Invalid media type.");
    }
  }
}

// Usage example
const audioPlayer = new AudioPlayer();

audioPlayer.play("mp3", "song.mp3");
audioPlayer.play("vlc", "movie.vlc");
audioPlayer.play("mp4", "video.mp4");
audioPlayer.play("avi", "video.avi");
