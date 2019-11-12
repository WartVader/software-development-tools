module.exports.sort = function (str)
{
    var arr = str.split(' ');

    arr.sort(function(a, b){
        return b.length - a.length;
    });
    var str1 = "";
    var i = 0;
    while(i < arr.length)
    {
        str1 += arr[i];
        if(i != arr.length - 1)
        str1 += ' ';
        i++;
    }
    return str1;
}

module.exports.reverse = function (str) {
    var len = str.split(" ").length;
    var revstr = ""; 
    while (len > 0) {
        len--;
        revstr += str.split(" ")[len];
        if(len != 0)
            revstr += ' ';
    }
    return revstr;
}

module.exports.strip = function (string){ 
    string = string.trim(); 
    string = string.replace(/\s+/g,' ' ); 
    string = string.replace(/^\s/,'') 
    string = string.replace(/\s$/,''); 
    return string;
}
