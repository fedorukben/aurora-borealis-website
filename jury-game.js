let post = {
    "pos": 0,
    0: ["text", 0],
    1: ["text", 0],
    2: ["text", 0]
};

let score = 0; 
let count = 0;
function score_post(post, mod){
    post['count']++
    if post[post["pos"]][1]{
        post["score"]++;
    }
    // post[post["pos"]][1] += mod;
    if (count == post['tot']){
        post['']
    }
    new_post(post);
}

function new_post(post){
    // This is until we get a real way to implement this
    if (post["pos"] < 2)
        post["pos"]++;
    else 
        game_over();

    document.getElementById("post_container").innerHTML = post[post["pos"]][0];
}

function game_over(){


}