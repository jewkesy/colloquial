function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
   return r;
}

function orderSort(a,b) {
   return ($(a).attr('order') > $(b).attr('order')) ? 1 : -1;
}

function getRandomNumber(max, min) {
    var retVal;
    var lowerLimit = min || 0;

    if (max == lowerLimit) {
      retVal = max;
    } else {
      retVal = Math.floor(Math.random()*(max-lowerLimit+1)+lowerLimit);
    }
    return retVal;
}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function countDecimalPlaces(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}

function getOffsetLocation(location, fixed) {

  var from = Math.floor(location);
  var to = Math.ceil(location);

  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}
