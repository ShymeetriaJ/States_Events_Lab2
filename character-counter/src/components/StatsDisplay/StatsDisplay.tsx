
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}
export default function StatsDisplay({stats, showReadingTime}: StatsDisplayProps) {

    return (
        <>
        <div className="text-stats">
        <p className="character-count">Character Count: {stats.characterCount}</p>
        <p className="word-count">Word Count: {stats.wordCount}</p>
        {showReadingTime && <p> Reading Time: {stats.readingTime} minutes</p>}
        </div>

        </>
    )
}