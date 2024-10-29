import React from 'react';
import './Videos.css';
import { Button } from 'react-bootstrap';

function Videos() {
  const videos = [
    {
      title: "Learning React for Beginners",
      src: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      description: "In this video, you will learn the basics of React JS, perfect for beginners!",
      channelUrl: "https://www.youtube.com/channel/UC8S4rDRZn6Z_StJ-hh7ph8g",
    },
    {
      title: "Mastering JavaScript in 2024",
      src: "https://www.youtube.com/embed/PkZNo7MFNFg",
      description: "This tutorial covers the key JavaScript concepts for mastering the language in 2024.",
      channelUrl: "https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA",
    },
    {
      title: "AI in Education: The Future",
      src: "https://www.youtube.com/embed/feHBGKw2RMs",
      description: "Explore how artificial intelligence is transforming the educational landscape.",
      channelUrl: "https://www.youtube.com/channel/UCc5di8v4XOKYwrCwQeTImjA",
    },
  ];

  return (
    <div className="videos-section container-fluid py-5">
      <h2 className="text-center mb-5">Educational Videos</h2>
      <div className="row g-4">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 d-flex flex-column align-items-center video-card">
            <div className="video-container">
              <iframe
                className="youtube-video"
                width="100%"
                height="250"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="mt-3 video-title">{video.title}</h5>
            <p className="text-center video-description">{video.description}</p>
            <Button
              href={video.channelUrl}
              target="_blank"
              className="btn btn-primary mt-auto go-channel-btn"
            >
              Go to Channel
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
