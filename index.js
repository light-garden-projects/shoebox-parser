function ParseShoebox(shoebox) {
    var parsedShoebox = {};
    var lines = shoebox.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        parsedShoebox[i] = line;
    }
    return parsedShoebox;
}

export default ParseShoebox;
