import GameIframe from './GameIframe';
import gameContent from '../lib/gameContent';

export default function MobileGamePreview() {
  return (
    <div className="game-frame-outer">
      {/* Floating badge stickers */}
      <span className="game-badge game-badge-1">Free to Play</span>
      <span className="game-badge game-badge-2">25+ Levels</span>
      <span className="game-badge game-badge-3">Instant Start</span>

      <GameIframe
        src="/game/index.html"
        title={`${gameContent.name} - Try a level`}
        gameTitle={gameContent.name}
        scrolling="no"
        className="game-iframe-responsive"
      />
    </div>
  );
}
