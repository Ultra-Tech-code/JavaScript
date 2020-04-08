let My_SlackUsername = "BlackAdam";
console.log("My Slack Username is " + My_SlackUsername);
//Creating an Array
let data = [
    {principal: 2500, time: 1.8},
    {principal: 1000, time: 5},
    {principal: 3000, time: 1},
    {principal: 2000, time: 3},
]
//Writing the Function to Calculate Interest
function interestCalculator(data){
    let interestData =[];
    for (i of data) {
        interest = '';
        rate = 0;
        interestData.principal = i.principal;
        interestData.time = i.time;
        if(i.principal >=2500 && i.time > 1 && i.time <3){
            interestData.rate = 3;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else if(i.principal >=2500 && i.time >=3){
            interestData.rate =4;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else if(i.principal <2500 || i.time <=1){
            interestData.rate =2;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        } else{
            interestData.rate =1;
            interestData.interest = (interestData.principal * interestData.rate * interestData.time)/100;
        }
        interestData.push({Principal:interestData.principal, Rate:interestData.rate, Time:interestData.time, Interest:interestData.interest});
    }

    console.log(interestData);
    return interestData;
}
//Calling the function
interestCalculator(data);