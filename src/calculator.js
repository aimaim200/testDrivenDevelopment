//JavaScript Code for a simple Addition and Subtraction

window.Calculator = {
    current: 0,

    //Addition  Function
    add: function() {

        var sum = 0;

        for (var i = 0, len = arguments.length; i < len; i++) {
            sum = sum + arguments[i];
        }
        return sum;
    },

    //Subtracting Function
    subtract: function() {

        var result = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
            result -= arguments[i];

        }

        return result;
    },

    multiply: function() {
        this.current = (arguments[0] * arguments[1]);

        return this.current;
    },

   //Multiplication Function
   mult: function (  ){
   
       var result =  this.current;

       for( var i =0, len = arguments.length; i < len; i++ ) {
          result = result * arguments[i];
       }
      this.current = result;
      return result;
    },

    
   //Dividing Function
    Divide: function (  ){
   
       var result =  this.current;

       for( var i =0, len = arguments.length; i < len; i++ ) {
          result = result / arguments[i];
       }
      this.current = result;
      return result;
    },
    //The Reset Function
    reset: function() {
        this.current = 0;
    },

    divide: function(x,y) {
        return x/y;
    },
    modulus: function (x, y) {
        return x % y;
    },
    average: function(x,y) {
        return (x + y) / 2;

    },
 };