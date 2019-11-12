const lib = require("./lib"); 

test('have to "c b a"', () => {
    expect(lib.reverse("abc def jhi")).toBe("jhi def abc");
    expect(lib.reverse("Мама мыла раму")).toBe("раму мыла Мама");
    expect(lib.reverse("1 2 3 4 5 6")).toBe("6 5 4 3 2 1");
});

test('have to "c b a"', () => {
    expect(lib.sort("a bbb cccc ddd e")).toBe("cccc bbb ddd a e"); 
    expect(lib.sort("Мама мыла раму")).toBe("Мама мыла раму"); 
    expect(lib.sort("aaa1 b4 cc2")).toBe("aaa1 cc2 b4"); 
});

test('have to "c b a"', () => {
    expect(lib.strip("   aaa  bb c ")).toBe("aaa bb c"); 
    expect(lib.strip(" Мама   мыла раму ")).toBe("Мама мыла раму"); 
    expect(lib.strip("      Something   is    wrong")).toBe("Something is wrong"); 
});