function timeToWalk(steps, footPrint, kmPerHr) {
    let walkedInM = steps * footPrint;
    let walkedInKm = walkedInM / 1000;
    let minutesRest = parseInt(walkedInM / 500);
    let totalSeconds = walkedInKm / kmPerHr * 3600 + minutesRest * 60;
    let hoursWalked = parseInt(totalSeconds / 3600);
    totalSeconds -= hoursWalked * 3600;
    let minutesWalked = parseInt(totalSeconds / 60);
    let secondsWalked = totalSeconds % 60;
}

timeToWalk(4000, 0.60, 5)