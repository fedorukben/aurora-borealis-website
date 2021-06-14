let post = {
    "pos": 0,
    0: ["Some text", 0],
    1: ["Another text", 0],
    2: ["Final text", 0]
};

function score_post(post, mod){
    post[post["pos"]][1] += mod;
    new_post(post);
}

function new_post(post){
    // This is until we get a real way to implement this
    if (post["pos"] < 2)
        post["pos"]++;
    else
        post["pos"] = 0;

    document.getElementById("post_container").innerHTML = post[post["pos"]][0];
}