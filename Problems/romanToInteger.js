const romanToInt = (s) => {
    var hash = {
        I: -1,
        V:-1,
        X: -1,
        L:-1,
        C: -1,
        D: -1,
        M: -1
      };
  
  
  
      for(var i = 0; i<s.length;i++){
          if(hash[s.charAt(i)] < i)
             hash[s.charAt(i)] = i;
      }
      sum = 0;
      console.log(hash);
      for(var j = 0;j<s.length;j++){
          switch (s.charAt(j)){
              case 'I':
                  if(j<hash['V']||j<hash['X']){
                      sum-=1;
                  }
                  else{
                     sum+= 1;
                  }
                  break;
              case 'V':
                  sum+=5;
                  break;
              case 'X':
                  if(j<hash['L']||j<hash['C']){
                      sum-=10;
                  }
                  else{
                     sum+=10;
                  }
                  break;
              case 'L':
                     sum+=50;
                  break;
              case 'C':
                  if(j<hash['D']||j<hash['M']){
                      sum-=100;
                  }
                  else{
                     sum+=100;
                  }
                  break;
              case 'D':
                     sum+=500;
                  break;
              case 'M':
                     sum+=1000;
                  break;
  
          }
      }
  
      return sum;
};

console.log(romanToInt("IV"));
