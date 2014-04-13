var fs = require('fs');

fs.readFile('alcohol_who_source.json', function(error, data) {
  if(error) {
    throw error;
  }

  var newData = JSON.parse(data).data.reduce(function(previous, current) {
    if(current[8] && current[9]) {
      previous.push({
        name: current[8],
        liter_per_capita: current[9]
      });
    }
    
    return previous; 
  }, []);
  
  fs.writeFile('alcohol_who.json', JSON.stringify(newData), function(error) {
    if(error) {
      throw error;
    }
    console.log('Write successful!');
  });
});
