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

		it("should add numbers",function(){
			expect(Calculator.add(5)).toEqual(5);
			expect(Calculator.add(5)).toEqual(10);
		});
	    it("should add any number of numbers", function(){
	    	expect(Calculator.add(1,2,3)).toEqual(6);
	    	expect(Calculator.add(1,2,3,4)).toEqual(16);
	    });

	});

  describe("when subtracting numbers ",function(){
       it("should subtract numbers ", function(){
       	   expect(Calculator.subtract(5)).toEqual(-5);
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

        Calculator.add(5);
        Calculator.add(20);
        expect(Calculator.current).toEqual(25);

        Calculator.reset();
        expect(Calculator.current).toEqual(0);
     });

    describe("when multiplying 2 * 5", function() {
        it( "should equal 10", function() {
            Calculator.current = 2;
            Calculator.multiply(5);

            expect(Calculator.current).toEqual(10);
        })
    });

});