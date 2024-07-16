export const ssNumGenerator = () => {
    let randomNum = Math.floor(Math.random() * 1000000000)
    // console.log(randomNum)

    const randomNumString = String(randomNum)
    // console.log(typeof randomNumString)

    const first3 = randomNumString.slice(0, 3)
    const second2 = randomNumString.slice(3, 5)
    const third4 = randomNumString.slice(5)

    // console.log(first3)
    // console.log(second2)
    // console.log(third4)

    return () => { `${first3}-${second2}-${third4}` }

}

