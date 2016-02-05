//Jamsine Spec Blacks:

describe("Calculator",function(){
   beforeEach(function(){
     Calculator.current = 0;

   });

	describe("when adding numbers ",function(){
	 
		it("should store the current value at all times", function(){
			expect(Calculator.current).toBeDefined();
			expect(Calculator.current).toEqual(0);
		});

	    it("should add 1 to 2 to get three", function() {
	        expect(Calculator.add(1, 2)).toEqual(3);
	    });

		
	    it("should add any number of numbers", function(){
	    	expect(Calculator.add(1,2,3)).toEqual(6);
	    });

	});

  describe("when subtracting numbers ",function(){
       it("should subtract numbers ", function(){
       	   expect(Calculator.subtract(0,5)).toEqual(-5);
       });
       it("should subtract a -ve number from a -ve number ", function () {
           expect(Calculator.subtract(-2, 5)).toEqual(-7);
       });
   });

  describe("when multiplying  numbers ",function(){
      it("can multiply positive integers", function() {
          expect(Calculator.mult(4, 3)).toEqual(0);
      });
    });


  describe("when Dividing  numbers ",function(){
     it("can Divide positive integers", function() {
          expect(Calculator.Divide(6, 2)).toEqual(0);
      });
    });
     it("Reset the Calculator to zero",function(){
     	Calculator.current = 20;
     	Calculator.reset();

        expect(Calculator.current).toEqual(0);
     });

    describe("when multiplying 2 * 5", function() {
        it("should equal 10", function() {

            Calculator.multiply(5, 2);
  
            expect(Calculator.multiply(5, 2)).toEqual(10);
        });
    });


    describe("when dividing 6 by 2", function() {
        it("should return 3", function() {
            expect(Calculator.divide(6, 2)).toEqual(3);
        });

        it("should return 4 for 8 divided by 2", function () {
            expect(Calculator.divide(8, 2)).toEqual(4);
        });
    });

    describe("modulus of 3 and 2", function() {
        it("should reutrn 1", function() {
            expect(Calculator.modulus(3, 2)).toEqual(1);
        });
    });

    describe("When calculating the average", function() {
        it("It should return the average of two numbers", function() {
            expect(Calculator.average(7, 5)).toEqual(6);
        });

    });


});