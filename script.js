




console.log('Let write some Java Script');


document.getElementById("hamburger").addEventListener("click", () => {


    document.getElementById("respbox").classList.toggle("hidden");

}
)

let clipPlay = document.querySelectorAll(".hoverPlay").forEach(e => {

    e.addEventListener("mouseover", () => {

        e.play();
        e.muted = true;

    }
    )

});


let clipPause = document.querySelectorAll(".hoverPlay").forEach(e => {



    e.addEventListener("mouseout", () => {
        e.pause();

    })

}
);


let veiwhistory = document.querySelectorAll(".viewHistory").forEach(e => {
    e.addEventListener("click", () => {
        document.getElementById("subsections").classList.add("hidden");
        document.getElementById("historySection").classList.remove("hidden");
        document.getElementById("rightbox").classList.add("hidden");
        document.querySelector(".yourchannel").classList.add("hidden");
        document.querySelector(".yourchannel").classList.remove("flex");
        e.classList.add("border")
        e.classList.add("bg-[#f2f2f2]")
        document.querySelectorAll(".movetohome").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })
        document.querySelectorAll(".subcribecheck").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })
    })


})


let movetohome = document.querySelectorAll(".movetohome").forEach(e => {
    e.addEventListener("click", () => {
        document.getElementById("subsections").classList.add("hidden");
        document.getElementById("historySection").classList.add("hidden");
        document.getElementById("rightbox").classList.remove("hidden");
        document.querySelector(".yourchannel").classList.add("hidden");
        document.querySelector(".yourchannel").classList.remove("flex");
        e.classList.add("border")
        e.classList.add("bg-[#f2f2f2]")
        document.querySelectorAll(".viewHistory").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })
        document.querySelectorAll(".subcribecheck").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })
    })


});




// moving the videos in history

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".videoboxes").forEach(e => {

        e.addEventListener("click", () => {


            document.querySelector('.historytxt').classList.add("hidden");


            const clonedVideo = e.cloneNode(true);



            document.getElementById("addvideotoHis").appendChild(clonedVideo);

            document.querySelector(".clearurhist").classList.remove("hidden")


        }
        )
    })
});

let delhistory = document.querySelector(".clearurhist").addEventListener("click", () => {
    document.getElementById("addvideotoHis").innerHTML = "";
    document.querySelector(".clearurhist").classList.add("hidden")
    document.querySelector('.historytxt').classList.remove("hidden");


}
);


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hoverPlay").forEach(e => {

        e.addEventListener("click", () => {




            document.getElementById("mainhomecantainer").classList.add("hidden");
            const clonedVideo = e.cloneNode(true);

            clonedVideo.play();
            clonedVideo.controls = true;

            document.querySelector(".playingvideo").innerHTML = ""


            document.querySelector(".playingvideo").appendChild(clonedVideo);

            document.querySelector(".videoPlaysection").classList.remove("hidden");






        });













    }
    )

});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".relatvideo").forEach(e => {

        e.addEventListener("click", () => {

            const relatedvideosclone = e.cloneNode(true);
            document.querySelector(".playingvideo").innerHTML = ""

            relatedvideosclone.play();
            relatedvideosclone.controls = true;

            document.querySelector(".playingvideo").appendChild(relatedvideosclone);









        }
        )

    })

});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".relatedvideos").forEach(e => {

        e.addEventListener("click", () => {


            const createhisclone = e.cloneNode(true);

            createhisclone.addEventListener('click', () => {

                document.querySelector(".playingvideo").appendChild(createhisclone);



            }
            )



            document.getElementById("addvideotoHis").appendChild(createhisclone);






        }
        )

    })

});


document.querySelector(".back").addEventListener("click", () => {

    document.getElementById("mainhomecantainer").classList.remove("hidden");

    document.querySelector(".videoPlaysection").classList.add("hidden");










}
);


document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.videoboxes');
    const targetContainer = document.getElementById('titlesection');

    containers.forEach(container => {
        container.addEventListener('click', function () {


            const child = container.querySelector('.titletxt');

            targetContainer.innerHTML = "";
            let childclone = child.innerHTML;
            if (child && container !== targetContainer) {
                targetContainer.innerHTML = childclone;
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.relatedvideos');
    const targetContainer = document.getElementById('titlesection');

    containers.forEach(container => {
        container.addEventListener('click', function () {


            const child = container.querySelector('.title');

            targetContainer.innerHTML = "";
            let childclone = child.innerHTML;
            if (child && container !== targetContainer) {
                targetContainer.innerHTML = childclone;
            }
        });
    });
});


document.getElementById("repsearch").addEventListener("click", () => {



    document.querySelector(".moblesearch").classList.remove("hidden");
    document.querySelector(".logo").classList.add("hidden");
    document.querySelector(".youtube").classList.add("hidden");
    document.querySelector(".pk").classList.add("hidden");
    document.getElementById("hamburger").classList.add("hidden");
    document.querySelector(".cancelsearch").classList.remove("hidden");

    document.getElementById("repsearch").classList.add("hidden");



}
);

document.querySelector(".cancelsearch").addEventListener("click", () => {

    document.getElementById("repsearch").classList.remove("hidden");

    document.querySelector(".moblesearch").classList.add("hidden");
    document.querySelector(".logo").classList.remove("hidden");
    document.querySelector(".youtube").classList.remove("hidden");
    document.querySelector(".pk").classList.remove("hidden");
    document.getElementById("hamburger").classList.remove("hidden");
    document.querySelector(".cancelsearch").classList.add("hidden");



}
);


let movetosub = document.querySelectorAll(".subcribecheck").forEach(e => {
    e.addEventListener("click", () => {

        document.getElementById("rightbox").classList.add("hidden");
        document.getElementById("subsections").classList.remove("hidden");
        document.getElementById("historySection").classList.add("hidden");
        document.querySelector(".yourchannel").classList.add("hidden");
        document.querySelector(".yourchannel").classList.remove("flex");
        e.classList.add("border")
        e.classList.add("bg-[#f2f2f2]")
        document.querySelectorAll(".viewHistory").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })

        document.querySelectorAll(".movetohome").forEach(e => {
            e.classList.remove("border")
            e.classList.remove("bg-[#f2f2f2]")
        })
    })

});


// let write java for sign up

document.querySelectorAll(".clicktosignup").forEach(e => [
    e.addEventListener("click", () => {
        document.querySelector('.signupwidth').classList.remove('hidden')
        document.querySelector('.signupwidth').classList.add('flex')
       

        document.querySelector(".body").classList.add('blur-sm');

    }
    )
]);

let a = setTimeout(() => {

    document.querySelector('.signupwidth').classList.remove('hidden');
    document.querySelector(".body").classList.add('blur-sm')
    document.querySelector('.signupwidth').classList.add('flex')

}, 3000);



document.querySelector(".closebtn").addEventListener("click", () => {
    document.querySelector('.signupwidth').classList.add('hidden')

    document.querySelector(".body").classList.remove('blur-sm');




}
);


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myform');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        document.querySelector('.signupwidth').classList.add('hidden')

        document.querySelector(".body").classList.remove('blur-sm');


        // Prevent the default form submission


        // Get form data
        const name = document.getElementById('getName').value;
        const Email = document.getElementById('getgmail').value;

        document.querySelector(".requesttosignup").classList.add("hidden");
        document.querySelector('.yourchannel').classList.remove("hidden")
        document.getElementById('rightbox').classList.add("hidden");
        document.getElementById('subsections').classList.add("hidden");
        document.getElementById("historySection").classList.add("hidden");
     


        // Handle the form data
        document.querySelector(".Congratulate").innerHTML = `<h1 class = "text-3xl intalic"> Welcome! </h1> "${name}" you have successfully sign up in youtube <i class = "text-sm text-slate-400">( powered by Burhan-Bugs) </i> using email address "${Email}"`

        document.querySelector('.congratulation'). innerHTML = "Please Leave Comment How friendly is our product to you?"


    });
});


document.querySelectorAll(".youchannelsection").forEach(e=>{
    e.addEventListener("click",() => {

        document.querySelector(".yourchannel").classList.remove("hidden");
        document.querySelector(".yourchannel").classList.add("flex");
        document.querySelector(".yourchannel").classList.add("flex-col");
        document.getElementById("rightbox").classList.add("hidden");
        document.getElementById("subsections").classList.add("hidden");
        document.getElementById("historySection").classList.add("hidden");


      
    }
    )
})
































