function followers(input) {

    let res = {}
    let followers = 0
    let comments = 0
    let likes = 0

    while (input[0] !== 'Log out') {
        let tokens = input[0].split(':')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = Number(tokens[2])
        if (command == 'New follower') {
            if (!res.hasOwnProperty(p1)) {
                res[p1] = {
                    'likes': 0,
                    'comments': 0,
                }
                followers++
            }
        } else if (command == 'Like') {
            if (!res.hasOwnProperty(p1)) {
                res[p1] = {
                    'likes': +p2,
                    'comments': 0,
                }
                followers++
            } else {
                res[p1]['likes'] = +res[p1]['likes'] + (+p2)
            }
        } else if (command == 'Comment') {
            if (!res.hasOwnProperty(p1)) {
                res[p1] = {
                    'likes': 0,
                    'comments': 1,
                }
                followers++
            } else {
                let sum = +res[p1]['comments'] + 1
                res[p1]['comments'] = sum
            }
        } else if (command == 'Blocked') {
            if (res.hasOwnProperty(p1)) {
                delete res[p1]
                followers--
            } else {
                console.log(`${p1} doesn't exist.`);
            }
        }
        input.shift()
    }
    console.log(`${followers} followers`);
    for (let el in res) {
        sum = +res[el].likes + +res[el].comments
        console.log(`${el}: ${sum}`)
    }
}

followers(["New follower: George", "Like: George: 5", "New follower: George", "Log out"])

followers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])

followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])

