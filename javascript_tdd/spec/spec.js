describe("calculator tests", function(){
    
    describe("Addition tests",function(){
        it("should return 4", function(){
            expect(addition(2,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function() {
         expect(addition(20,22)).toBe(42);  
        })
        it("should show an alert for Nan", function(){
        spyOn(window, "alert");
        addition("Fish", 22);
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        
      });
      it("show an alert if we only supply one number", function(){
         spyOn(window, "alert");
        addition("42");
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers"); 
      });
    });
    
    describe("Subtraction tests", function(){
        it("should return 4", function(){
            expect(subtraction(6,2)).toBe(4);
        });
    
         it("should not return 4 for different numbers", function() {
         expect(subtraction(20,10)).toBe(10);  
       })
    it("should show an alert for Nan", function(){
        spyOn(window, "alert");
        subtraction("Fish", 20);
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
    });
    it("show an alert if we only supply one number", function(){
         spyOn(window, "alert");
        subtraction("10");
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers"); 
    });
  });
  
  describe("Multiplication tests", function(){
        it("should return 4", function(){
            expect(multiplication(6,2)).toBe(12);
        });
    
         it("should not return 4 for different numbers", function() {
         expect(multiplication(5,5)).toBe(25);  
       })
    it("should show an alert for Nan", function(){
        spyOn(window, "alert");
        multiplication("Fish", 5);
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
    });
    it("show an alert if we only supply one number", function(){
         spyOn(window, "alert");
        multiplication("5");
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers"); 
    })
  })
   describe("Division tests", function(){
        it("should return 3", function(){
            expect(division(9,3)).toBe(3);
        });
    
         it("should not return 3 for different numbers", function() {
         expect(division(10,5)).toBe(2);  
       })
    it("should show an alert for Nan", function(){
        spyOn(window, "alert");
        division("Fish", 5);
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
    });
    it("show an alert if we only supply one number", function(){
         spyOn(window, "alert");
        division("5");
        expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
});
     it("should return 4", function() {
        expect(division(8,2)).toBe(4); 
   });

       it("should not return 4 for different numbers", function() {
         expect(division(10,5)).toBe(2); 
   })

   })
})

