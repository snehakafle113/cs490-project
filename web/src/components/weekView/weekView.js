function Day(i){// day needs 2 parameters: day of the week and date
  var q = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  var hours = new Array(5);
  for(var j = 0; j < hours.length; j++){
      hours[j] = j;
  }

  return(q[i]);

}

function Week(){//week needs 1 parameter: day of the week
  var week = new Array(1);
  for(var i = 0; i < week.length; i++){
      week[i] = new Array(7);
  }

  for(var i = 0; i < 1; i++){
      for(var j = 0; j < 7; j++){
          week[i][j] = Day(j);
      }
  }
  for(var i = 0; i < 1; i++){
      for(var j = 0; j <7; j++){
          //document.write(week[i][j] + ' ');
      }
      //document.write('<br>');
  }
  return(week);
}

console.log(Week())

//export {Week, Day as default};