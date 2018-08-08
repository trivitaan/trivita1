function posneg()
{
    var pos = [];
    var neg = [];
    var array = [3, 12, -8, 1, -3, 8, -14, 7, -15];
    var x = 0
    var y = 0

    for(i = 0; i < array.length; i++)
    {
        if(array[i] > 0)
        {
            pos.push(array[i]);
        }
        if(array[i] < 0)
        {
            neg.push(array[i]);
        }
    }
    for(j = 0; j < pos.length; j++)
    {
        x += pos[j]
    }
    for(k = 0; k < neg.length; k++)
    {
        y += neg[k]
    }

    console.log(pos);
    console.log(neg);
    console.log(x);
    console.log(y);

    if ( x > (Math.abs(y)))
    {
        console.log('Positive Wins')
    }
    else if (x < (Math.abs(y)))
    {
        console.log('Negative Wins')
    }
    else
    {
        console.log('Draw')
    }

}

posneg()