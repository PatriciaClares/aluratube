import React from "react";
import {
  StyledTitle,
  StyledPlaylists,
  StyledTimeline,
  StyledVideos,
} from "./timeline.styled";

interface Playlists {
  name: string;
  videos: Playlist[];
}

interface Playlist {
  title: string;
  url: string;
  thumb: string;
}

interface TimelineProps {
  playlists: Playlists[];
}

const Timeline: React.FC = ({ playlists }: TimelineProps) => {
  return (
    <StyledTimeline>
      {Object.values(playlists).map((playlist) => {
        return (
          <StyledPlaylists key={playlist.name}>
            <StyledTitle>{playlist.name}</StyledTitle>
            <StyledVideos>
              {playlist.videos.map((video, index) => {
                return (
                  <a key={index} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </StyledVideos>
          </StyledPlaylists>
        );
      })}
    </StyledTimeline>
  );
};

export default Timeline;
