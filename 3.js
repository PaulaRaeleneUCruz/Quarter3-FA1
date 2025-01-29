var consent = conform("Do you agree to share yout personal infotmay\tion with this site?");
if (consent) {
    console.log("Name: " + nickname);
    console.log("Height: " + feet + "'" + inches + ";");
    console.log("Weight: " + weightInLbs + " lbs");
}else {
    console.log("User does not wish to share his/her information.");
}
