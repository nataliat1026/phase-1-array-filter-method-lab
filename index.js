const findMatching = (drivers, string) => {
    let caseMatch = drivers.filter(
        (name) => {
            if (name.toLowerCase() === string.toLowerCase()) {
                return name;
            }
        }
    )
    if (caseMatch === undefined) {
        return [];
    } else {
        return caseMatch;
    }
}

const fuzzyMatch = (drivers, string) => {
    let startMatch = drivers.filter(
            (name) => {
                let nameArray = Array.from(name);
                let stringArray = Array.from(string);
                if (nameArray[0][1] === stringArray[0][1]) {
                    return name;
                }
            }
        )
    if (startMatch === undefined) {
        return [];
    } else {
        return startMatch;
    }
}

