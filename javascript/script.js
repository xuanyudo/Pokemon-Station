var blogs = [
    {
        "title": "Pikachu",
        "detail": `Pikachu are small, chubby, and cute mouse-like Pokémon. They are almost completely covered by yellow fur. They have long yellow ears that are tipped with black. A Pikachu's back has two brown stripes, and its large tail is notable for being shaped like a lightning bolt. On its cheeks are two circle-shaped red pouches used for storing electricity. They turn yellow and spark with electricity when it's about to use an Electric attack, such as Thunderbolt. It has also been known to generate small surges of electrical energy in anger or for protection, like in the anime.

            A female Pikachu looks almost exactly the same as a male, with the exception of her tail, which is rounded at the end and has an inward dent, giving it the appearance of a heart. However, in earlier anime episodes, and in the games prior to Generation IV, female and male Pikachu look identical.
            
            As Gigantamax Pikachu, it becomes larger and chubbier (similar to its Generation 1 design). Its tail becomes longer and stores all of the electricity it generates, causing it to glow a bright yellow and enabling it to become as powerful as a lightning strike. Its power is equal to that a power plant; however, it is difficult to use it in peoples' homes since Pikachu can only remain in its Gigantamax form for a short time.
            
            When several of these Pokémon gather, their electricity can cause lightning storms.
            
            A Shiny Pikachu is orange.
            
            In "A Plethora of Pikachu!", according to Pikala, the fur from Pikachu in the Kanto region sparkles in sunlight, while the Pikachu from Alola fur is silky smooth and shines in sunlight.`,
        "image": "./imgs/025Pikachu.png",
        "date": "2014-01-01T23:28:56.782Z"
    },
    {
        "title": "Bulbasaur",
        "detail": "Bulbasaur resembles a small amphibian , but bears three claws on each of its feet and has no tail. It also has large, red eyes and small, sharp teeth. Its skin is a light, turquoise color with dark, green spots. It has three claws on all four of its legs. Its most notable feature, however, is the aforementioned bulb on its back, which according to its entry in the Pokédex, was planted there at birth.",
        "image": "./imgs/001Bulbasaur.png",
        "date": "2014-01-01T23:28:56.782Z"
    }, {
        "title": "Squirtle",
        "detail": "Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle. With its aerodynamic shape and grooved surface, Squirtle's shell helps it wade through the water very quickly. It also offers protection in battle. Like turtles, Squirtle has a shell that covers its body with holes that allow its limbs, tail, and head to be exposed. Unlike a turtle, Squirtle is ordinarily bipedal.",
        "image": "./imgs/007Squirtle.png",
        "date": "2014-01-01T23:28:56.782Z"
    }, {
        "title": "Articuno",
        "detail": `Kantonian
            Articuno is a large bird with blue plumage resembling ice crystals. Its coloring is darkest on its head crest and long, streaming tail. Its body is colored sky blue while growing lighter on its front, and its chest is a lighter blue than its body. Its most distinctive trait is its large wings, which are said to be made of ice. Its eyes are a medium shade of red.
            
            Galarian
            Galarian Articuno is a large bird with lavender plumage. Its colouring is darkest on its head crest and long, streaming tail. Its body is coloured white, while growing lighter on its front, and its chest is a black. Its most distinctive trait is its large wings with the edges having a border of white on the outer edge (which glow a light blue color any time it's used ice move), on its forehead is a crest that consists of three, darker lavender rhombus-shaped feathers. It has circular light blue eyes and black feathers surround both eyes, making it look like as if it wears a domino mask (which glow a light blue color any time it's used ice move), a short lavender beak, and long, thin gray legs. Each foot has three forward facing toes and one that faces backward. On its chest is a mass of black downy feathers. Each foot has three forward facing lavender toes and one that faces backward. Its long, streamer-like tail is longer than its body and the same shade of lavender as its crest.`,
        "image": "./imgs/144Articuno.png",
        "date": "2014-01-01T23:28:56.782Z"
    }
];


var createBlog = function (title, detail, image, date) {
    var div = document.createElement("div");
    var titleElem = document.createElement("h2");
    var detailElem = document.createElement("p");
    var img = document.createElement("img");
    var timeElem = document.createElement("h5");
    var clear = document.createElement("hr");
    titleElem.innerText = title;
    detailElem.innerText = detail;
    timeElem.innerText = date;
    timeElem.classList.add("text-muted");
    img.src = image;
    img.style.float = "right";
    img.style.width = "360px";
    img.style.height = "360px";
    img.classList.add("img-responsive");
    clear.style.clear = "both";
    div.appendChild(img);
    div.appendChild(titleElem);
    div.appendChild(timeElem);
    div.appendChild(detailElem);
    div.appendChild(clear);
    return div;
}

var addToDOM = function (parent, child) {
    parent.appendChild(child);
}

var load_blogs = function () {
    var blog_space = document.getElementById("blog-post");
    for (blog of blogs) {
        var elem = createBlog(blog.title, blog.detail, blog.image, blog.date);
        addToDOM(blog_space, elem);
    }
    return;
}
var checkAll = function(){
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var file = document.getElementById("file").value;
    var date = new Date();
    var success = true;
    if(title==""){
        if(document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
    }
    if(detail==""){
        if(document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
    }
    if(file==""){
        if(document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
    }
    
    if(success){
        
        var file = document.getElementById("file").files[0];
        var reader = new FileReader();
        var filename = "";
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            filename = e.target.result;
            var blog = createBlog(title,detail,filename,date);
            var blog_space = document.getElementById("blog-post");
            blog_space.removeChild(blog_space.children[0]);
            blog_space.appendChild(blog);
            document.getElementById("post").disabled = false;
        }  
        
    }

    return false;
}
var cancelAction = function(){
    var blog_space = document.getElementById("blog-post");
        blog_space.removeChild(blog_space.children[0]);
        document.getElementById("post").disabled = false;
}



var post_new = function(btn){
    btn.disabled = true;
    window.scroll(0,0);
    var blog_space = document.getElementById("blog-post");
    var new_blog = document.createElement("form");
    new_blog.setAttribute("action","javascript:void(0)");
    var div1 = document.createElement("div");
    div1.classList.add("form-group");
    var label1 = document.createElement("label");
    label1.innerText = "Title: ";
    label1.setAttribute("for","title");
    
    var title_input = document.createElement("input");
    title_input.classList.add("form-control");
    title_input.setAttribute("id","title");
    title_input.type = "text";
    var title_error = document.createElement("small");
    title_error.id = "title-error";
    title_error.innerText = "Your title is blank!! Please type something...";
    title_error.classList.add("text-danger");
    title_error.classList.add("d-none");

    var div2 = document.createElement("div");
    div2.classList.add("form-group");
    var label2 = document.createElement("label");
    label2.innerText = "Main Blog: ";
    label2.setAttribute("for","detail");

    var input1 = document.createElement("textarea");
    input1.classList.add("form-control");
    input1.rows = "3";
    input1.setAttribute("id","detail");

    var detail_error = document.createElement("small");
    detail_error.id = "detail-error";
    detail_error.innerText = "Your textarea is blank!! Please type something...";
    detail_error.classList.add("text-danger");
    detail_error.classList.add("d-none");

    var div3 = document.createElement("div");
    div3.classList.add("form-group");
    var label3 = document.createElement("label");
    label3.innerText = "Image File: ";
    label3.setAttribute("for","detail");

    var input2 = document.createElement("input");
    input2.type = "file";
    input2.classList.add("form-control");
    input2.accept = ".jpg, .jpeg, .png";
    input2.setAttribute("id","file");

    

    var file_error = document.createElement("small");
    file_error.id = "file-error";
    file_error.innerText = "You need one image for posting image";
    file_error.classList.add("text-danger");
    file_error.classList.add("d-none");
    
    var file_help = document.createElement("small");
    file_help.id = "file-help";
    file_help.innerText = "Upload only support .png, .jpg, .jepg format...";
    file_help.classList.add("text-muted");
    // file_help.classList.add("d-none");

    var div4 = document.createElement("div");
    div4.classList.add("form-group");
    var input3 = document.createElement("button");
    var input4 = document.createElement("button");
    input3.classList.add("btn");
    input3.classList.add("btn-primary");
    input3.innerText = "Post Blog";
    input3.addEventListener("click",checkAll);
    input4.classList.add("btn");
    input4.classList.add("btn-danger");
    input4.innerText = "Cancel";
    input4.addEventListener("click",cancelAction);
    input4.style.marginLeft = "5px";

    div1.appendChild(label1);
    div1.appendChild(title_input);
    div1.appendChild(title_error);
    div2.appendChild(label2);
    div2.appendChild(input1);
    div2.appendChild(detail_error);
    div3.appendChild(label3);
    div3.appendChild(input2);
    div3.appendChild(file_help);
    div3.appendChild(file_error);
    div4.appendChild(input3);
    div4.appendChild(input4);
    new_blog.appendChild(div1);
    new_blog.appendChild(div2);
    new_blog.appendChild(div3);
    new_blog.appendChild(div4);
    blog_space.insertBefore(new_blog,blog_space.children[0]);

}

