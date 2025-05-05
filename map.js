
<!DOCTYPE html>
<html>
    <body>
        <h1>java script maps</h1>
        <h2>the map.groupby() method</h2>
        <p id=""demo"></p>
        <script>
            const school = [
    {names:"Akash",class:4},
    {names:"ankith",class:6},
    {names:"surya",class:7},
    {names:"sanketh",class:3}
];
function mycallback({class}) {
    return class > 5 ? "high school" : "primary school";
}
const res = Map.groupBy(school,mycallback);
let text = "you are high school: <br>";
for (let x of res.get("high school")) {
    text += x.names + " " + x.class +"<br>";
}
text += "<br> you are primary school <br>";
for (let x of res.get("primary school")) {
    text += x.names + " " +x.class + "<br>";
}
document.getElementById("demo").innerHTML=text;
console.log(res.get("high school"));

        </script>
    </body>
</html>

