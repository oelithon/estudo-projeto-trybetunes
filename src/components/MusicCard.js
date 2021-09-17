import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const { name, previewUrl } = this.props;
    return (
      <div>
        <p>{ name }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

export default MusicCard;
