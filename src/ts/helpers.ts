export const dayName = (day: number): string => {

    switch (day) {
        case 1:
            return 'Lu';
        case 2:
            return 'Ma';
        case 3:
            return 'Mi';
        case 4:
            return 'Ju';
        case 5:
            return 'Vi';
        case 6:
            return 'Sa';
        case 0:
            return 'DO';


    }
}
export const dates = (current) => {
    let week = new Array();
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() + 1));
    for (let i = 0; i < 9; i++) {
        week.push(
            new Date(current)
        );
        current.setDate(current.getDate() + 1);
    }
    return week;
}

