const addBtn = document.querySelector("#Proceed");
const data = []

function addData(){
    const checkInIn = document.querySelector("#checkIn");
    const checkOutIn = document.querySelector("#checkOut");
    const startDate = new Date(checkInIn.value)
    const endDate = new Date(checkOutIn.value)
    const timeDiff = endDate - startDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    data.push({
        checkIN : checkInIn.value,
        checkOut: checkOutIn.value,
        noOfDays: daysDiff

    });
    console.log(data);
    console.log(daysDiff);
    // function noOfDay (checkIn,checkOut){
    //     const timeDiff = checkOut - checkIn;
    //     const daysDiff = Math.ceil(timeDiff/ (1000 * 60 * 60 * 24));
    //     return daysDiff;
        
    // }
}
  
  addBtn.addEventListener("click",addData)