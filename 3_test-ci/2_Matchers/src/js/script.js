export default function sortedByHealth(player) {
    return player.sort((a, b) => b.health - a.health);
}