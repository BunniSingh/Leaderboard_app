
export function getLatestUpdateTime(users) {
    if (!Array.isArray(users) || users.length === 0) return "";
    let sortByUpdatedAt = users.sort((a, b)=> new Date(b.updatedAt) - new Date(a.updatedAt));
    let latestTime = new Date(sortByUpdatedAt[0].updatedAt)
    return latestTime.toLocaleTimeString();
}




























