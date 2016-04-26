// Babysitter Kata

// Background
// ----------
// This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward:

// The babysitter
// - starts no earlier than 5:00PM
// - leaves no later than 4:00AM
// - gets paid $12/hour from start-time to bedtime
// - gets paid $8/hour from bedtime to midnight
// - gets paid $16/hour from midnight to end of job
// - gets paid for full hours (no fractional hours)


// Feature:
// As a babysitter
// In order to get paid for 1 night of work
// I want to calculate my nightly charge

// This function returns the total charge for 1 night's work
// function accepts 3 strings, start, end and bed times
var nightlyCharge = function(start, end, bed){

  // converting strings to numbers
    // hourStart always rounded down than up bc no fractional hours
  var hourStart = +(start.split(':')[0]);
  var hourEnd = convertTime(roundUp(end));
  var bedtime = convertTime(roundUp(bed));

  // returns final bill for 1 night's work
  return '$' + calculateBill(hourStart, hourEnd, bedtime);

};

// to round up end and bed times, as rule says gets paid for whole hours
// rounding bed time b/c get paid more from start to bed
function roundUp(time){
  var clock = time.split(':');
  var mins = +(clock[1]);
  if(mins > 0){
    return (+clock[0])+1;
  } else {
    return +clock[0];
  }
}

// this function converts the string to a number
// also, for times after midnight, makes time reverse military time
function convertTime(time){
  if(time >=1 && time <=4){
    return time + 12;
  } else {
    return time;
  }
}

// this function sets the hours worked for each category and calculates final bill
function calculateBill(start, end, bedtime){
  var invoice = {
    startToBed: {rate: 12, hours:0},
    bedToMidnight: {rate: 8, hours:0},
    midnightToEnd: {rate: 16, hours:0}
  };
  // assuming bed time occurs before midnight
  invoice.startToBed.hours = bedtime - start;
  invoice.bedToMidnight.hours = 12 - bedtime;
  invoice.midnightToEnd.hours = end - 12;

  return (invoice.startToBed.rate * invoice.startToBed.hours)
        + (invoice.bedToMidnight.rate * invoice.bedToMidnight.hours)
        + (invoice.midnightToEnd.rate * invoice.midnightToEnd.hours);

}