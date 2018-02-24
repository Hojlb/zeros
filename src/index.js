module.exports = function getZerosCount(number) {

    let count = 1;

    let num = number;
    let divider = 5;
    let result = number;

    while ( result >= 10 )
    {
        result = (num - num % divider) / divider;
        divider = divider * 5;
        count += result;
    }

    if( result < 5 && result >= 2 ){
        count--;
    }

    return( count );

}
