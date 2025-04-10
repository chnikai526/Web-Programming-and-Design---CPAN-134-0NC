function calculateArea(width, height) {
    if (Number.isInteger(width) && Number.isInteger(height)) {
        console.log(width*height);
        return;
    }else{
        console.log("Please enter valid integers");
        return;}
}

calculateArea(3,"e");